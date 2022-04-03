import NavigationService from '../../navigation/NavigationService'
import {httpService} from '../../utils/http/http';
import {
    EXAMPLE_REQUEST
} from '../actions/session';
import actions from '../actions';
import JWT from '../../utils/expo-jwt';
import settings from '../../utils/settings';
import i18n from '../../utils/i18n/index'
import Toast from "react-native-root-toast";

const sessionMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case EXAMPLE_REQUEST:
            httpService.exampleRequest(action.id).then(res => {
                dispatch(actions.session.exampleResponse(res));
            }).catch(err => {
                dispatch(actions.session.exampleError(err))
            });
            break;
    }
};

export default sessionMiddleware;
