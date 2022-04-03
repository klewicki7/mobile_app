import {LOGOUT, LOGIN_LEASING_RESPONSE} from "../actions/leasing"
import settings from '../../utils/settings';

const initialState = {
    id: null,
    leasing: undefined
};


const leasing = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return initialState;
        case LOGIN_LEASING_RESPONSE:
            return {...state, loginLeasingPending :false, leasing: action.res};    
        default:
            return state;
    }
};

export default leasing;
