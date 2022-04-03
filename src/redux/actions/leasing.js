export const LOGIN_LEASING_RESPONSE = 'LOGIN_LEASING_RESPONSE';
export const LEASING_STATUS_RESPONSE = 'LEASING_STATUS_RESPONSE';
export const LEASING_STATUS_ERROR = 'LEASING_STATUS_ERROR';

export const LOGOUT = 'LOGOUT';


export default {
    leasingStatusRequest: (idUser) => ({type: LEASING_STATUS_REQUEST, idUser}),
    loginleasingResponse: (res) => ({type: LOGIN_LEASING_RESPONSE, res}),
    leasingStatusError: (error) => ({type: LEASING_STATUS_ERROR, error}),
    logout: () => ({type: LOGOUT}),
};
