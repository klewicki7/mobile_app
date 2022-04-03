import {
} from '../actions/session';
import settings from '../../utils/settings';
import {LOGOUT} from "../actions/leasing"
import {EXAMPLE_RESPONSE, LISTADO_RESPONSE} from "../actions/user";

const initialState = {
    id: null,
    dataClient: [],
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT:
            return initialState;
        
        case EXAMPLE_RESPONSE:
            return{...state, id: action.res}

        case LISTADO_RESPONSE:
            return{...state, dataClient: action.res}
        default:
            return state;
    }
};

export default user;
