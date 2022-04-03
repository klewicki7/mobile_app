
export const EXAMPLE_REQUEST = 'EXAMPLE_REQUEST';
export const EXAMPLE_RESPONSE = 'EXAMPLE_RESPONSE';
export const EXAMPLE_ERROR = 'EXAMPLE_ERROR';




export default {
    exampleRequest:() => ({type: EXAMPLE_REQUEST}),
    exampleResponse:(res) => ({type: EXAMPLE_RESPONSE, res}),
    exampleError: (error) => ({type: EXAMPLE_ERROR, error}),

};
