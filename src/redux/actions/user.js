
export const EXAMPLE_REQUEST = 'EXAMPLE_REQUEST';
export const EXAMPLE_RESPONSE = 'EXAMPLE_RESPONSE';
export const EXAMPLE_ERROR = 'EXAMPLE_ERROR';

export const LISTADO_REQUEST = 'LISTADO_REQUEST';
export const LISTADO_RESPONSE = 'LISTADO_RESPONSE';
export const LISTADO_ERROR = 'LISTADO_ERROR';

//Primero se definen las actions
export const INSERT_CLIENT_REQUEST = 'INSERT_CLIENT_REQUEST';
export const INSERT_CLIENT_RESPONSE = 'INSERT_CLIENT_RESPONSE';
export const INSERT_CLIENT_ERROR = 'INSERT_CLIENT_ERROR';


export default {
    exampleRequest: () => ({ type: EXAMPLE_REQUEST }),
    exampleResponse: (res) => ({ type: EXAMPLE_RESPONSE, res }),
    exampleError: (error) => ({ type: EXAMPLE_ERROR, error }),

    listadoRequest: () => ({ type: LISTADO_REQUEST }),
    listadoResponse: (res) => ({ type: LISTADO_RESPONSE, res }),
    listadoError: (error) => ({ type: LISTADO_ERROR, error }),

    //Se crean los types
    insertClientRequest: (nombre, apellido) => ({ type: INSERT_CLIENT_REQUEST, nombre, apellido }),
    insertClientResponse: (res) => ({ type: INSERT_CLIENT_RESPONSE, res }),
    insertClientError: (error) => ({ type: INSERT_CLIENT_ERROR, error }),

};
