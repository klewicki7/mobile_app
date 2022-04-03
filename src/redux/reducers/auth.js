import {LOGIN_RESPONSE,LOGIN_LEASING_RESPONSE,PLAN_RESPONSE} from '../actions/session';
import {LOGOUT} from "../actions/leasing"
import settings from '../../utils/settings';

const initialState = {
    loggedIn: false,
    jwt: null,
    jwtDate: undefined,
    jwtExpiration: null,
    refreshToken: null,
    refreshExpiration: null,
    refreshPending: false,
    refreshPromise: null,
    plan: undefined
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_RESPONSE:
            return {...state, loggedIn: true, jwt: action.res.token, jwtDate: new Date()};
        case LOGIN_LEASING_RESPONSE:
                return {...state, loggedIn: true, jwt: action.res.token, jwtDate: new Date()};    
        case PLAN_RESPONSE:
                return {...state, plan: action.res};    
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default auth;
