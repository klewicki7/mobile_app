import actions from '../actions';
import {AUTHENTICATED_REQUEST} from "../actions/auth";

const authMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case AUTHENTICATED_REQUEST:
            let jwt = getState().auth.jwt;
            if (jwt) {
                action.request(getState().auth.jwt)
            } else {
                if (!action.noRedirection) {
                    dispatch(actions.leasing.logout())
                }
            }
    }
};

export default authMiddleware;
