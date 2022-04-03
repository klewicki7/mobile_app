import { LOGOUT } from "../actions/leasing"
import {
    EXAMPLE_RESPONSE
} from "../actions/reservation";
import actions from '../actions';

const initialState = {
    id: null,


};

const reservation = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_RESPONSE:
            return { ...state, id: action.res }
        default:
            return state;
    }
};

export default reservation;
