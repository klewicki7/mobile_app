import Toast from 'react-native-root-toast';
import {httpService} from "../../utils/http/http";
import actions from '../actions';
import {EXAMPLE_REQUEST} from "../actions/vehicle";
import i18n from '../../utils/i18n';
import NativeCarshare from '../../NativeCarShare';

const vehicleMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case EXAMPLE_REQUEST:
            httpService.exampleRequest(action.id).then(res => {
                dispatch(actions.vehicle.exampleResponse(res));
            }).catch(err => {
                dispatch(actions.vehicle.exampleError(err))
            });
            break;
    }
};



export default vehicleMiddleware;
