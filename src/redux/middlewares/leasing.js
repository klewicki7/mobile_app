import {httpService} from "../../utils/http/http";
import actions from '../actions';
import {fileUploadService} from "../../utils/amazon/fileUpdate";
import {
    LOGIN_LEASING_RESPONSE,LOGOUT
} from "../actions/leasing";
import NavigationService from "../../navigation/NavigationService";
import utils from '../../utils/index';
import SplashScreen from "../../utils/splash-screen";

const leasingMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case LOGIN_LEASING_RESPONSE:
            break;
            case LOGOUT:
                NavigationService.reset('Initial');  
    }
};

export default leasingMiddleware;
