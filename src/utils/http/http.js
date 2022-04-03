import settings from '../settings'
import {routes} from './routes';
import {DELETE, GET, POST, PUT} from './routes/methods';
import mockTokens from './mock-tokens';
import assert from 'assert';

const baseApiUrl = settings.apiURL;
const TIMEOUT = 'TIMEOUT';

const performRequest = (route, {body, headers} = {}) => {
    let promise;
    switch (route.method) {
        case POST:
            promise = postRequest(baseApiUrl, route.url, body, headers);
            break;
        case GET:
            promise = getRequest(baseApiUrl, route.url, headers);
            break;
        case PUT:
            promise = putRequest(baseApiUrl, route.url, body, headers);
            break;
        case DELETE:
            promise = deleteRequest(baseApiUrl, route.url, headers);
            break;
        default:
            throw Error(`Invalid method ${route.method}`);
    }

    // noinspection JSCheckFunctionSignatures
    const withTimeoutPromise = Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error(TIMEOUT)), settings.apiTimeout)
        )
    ]);

    return withTimeoutPromise
        .then(res => {
            if (res.ok) {
                console.log('ok');
                return res.json();
            } else {
                console.log('not ok');
                console.log(res);

                if (!res.body) {
                    let body;
                    try {
                        body = JSON.parse(res['_bodyText']);
                    } catch (e) {
                        body = 'No JSON body';
                    }
                    throw {...res, body};
                } else throw res;
            }
        }).catch(e => {
            console.log(e);
            throw e.body ? route.parseError({...e, errorCode: e.body.code}) : e;
        });
};

export const performAuthenticatedRequest = (jwt, route, {body, headers} = {}) => {
    return performRequest(route,
        {
            body,
            headers: {
                token: `${jwt}`,
                ...headers,
            }
        }
    );
};

export const getRequest = (baseApiUrl, url, headers) => fetch(baseApiUrl + url, {headers});

export const postRequest = (baseApiUrl, url, body, headers = {}) => {
    const resultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
    };

    if (headers['Content-Type'] === 'Auto') {
        delete resultHeaders['Content-Type'];
    }

    const resultBody = resultHeaders['Content-Type'] === 'application/json' ? JSON.stringify(body) : body;

    return fetch(baseApiUrl + url, {
        method: 'POST',
        headers: resultHeaders,
        body: resultBody,
    });
};

export const putRequest = (baseApiUrl, url, body, headers = {}) => {
    const resultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
    };

    if (headers['Content-Type'] === 'Auto') {
        delete resultHeaders['Content-Type'];
    }

    const resultBody = resultHeaders['Content-Type'] === 'application/json' ? JSON.stringify(body) : body;

    return fetch(baseApiUrl + url, {
        method: 'PUT',
        headers: resultHeaders,
        body: resultBody,
    });
};

export const deleteRequest = (baseApiUrl, url, headers) => fetch(baseApiUrl + url, {
    method: 'DELETE',
    headers,
});

export const dummyGet = (responseData) => new Promise((resolve, reject) => setTimeout(() =>
    responseData.error ? reject(responseData.error) : resolve(responseData), 500
));

// This method was added because the error data was needed and the dummyGet only return response.error (boolean).
export const dummyGetError = (route, responseData) => new Promise((resolve, reject) => setTimeout(() =>
    reject(route.parseError({...responseData, errorCode: responseData.code})), 500
));

export const httpService = !settings.testing ? {
    //METODO GET:
    exampleRequest:(id) => performRequest(routes.exampleRequest(id)),
    ListadoRequest:() => performRequest(routes.ListadoRequest()),
    //METODO POST:
    examplePostRequest: (body) => performRequest(routes.examplePostRequest(), {body}),
    //Luego llamos al route y le pasamos los datos
    insertClientRequest: (body) => performRequest(routes.insertClientRequest(), {body}),
} : {
    // DUMMY
    login: (dni, password) => {
        assert(dni !== undefined, 'login call');
        return (dni && dni !== '') ?
            dummyGet(mockTokens()) :
            dummyGet({message: 'Email o contraseña incorrectos'})
    },
    register: ({commerceNumber, email, cuit, name, password, document}) => {
        assert(
            commerceNumber !== undefined &&
            email !== undefined &&
            name !== undefined &&
            cuit !== undefined &&
            password !== undefined &&
            document !== undefined,
            'register call'
        );
        return (email === '') ?
            dummyGet({
                message: "Wrong parameters",
                details: {
                    requestParam1: "Reason requestParam1 is wrong",
                    requestParam2: "Reason requestParam1 is wrong",
                    requestParamN: "Reason requestParamN is wrong"
                }
            }) :
            (email === 'admin@gmail.com') ?
                dummyGet({
                    code: "USR006",
                    message: "Error signin up the user",
                    details: "Email already used"
                }) :
                (photo === '') ?
                    dummyGet({
                        code: "GNL001",
                        message: "Error uploading an image",
                        details: "An image produced an error while storing it"
                    }) :
                    dummyGet({result: "OK"})
    },
    recoverPassword: (email) => {
        assert(email !== undefined, 'recoverPassword call');
        return (email && email !== 'user@gmail.com') ?
            dummyGet({result: 'OK'}) :
            dummyGet({
                code: "USR003",
                message: "Email not found in the system",
                details: "You need to provide a registered user's email address"
            })
    },
    resetPassword: (token, password) => {
        assert(token !== undefined && password !== undefined, 'resetPassword call');
        return dummyGet({
            result: 'ok'
        })
    },
    refreshToken: (refreshToken) => {
        assert(refreshToken !== undefined, 'refreshToken call');
        return dummyGet(mockTokens());
    },
};
