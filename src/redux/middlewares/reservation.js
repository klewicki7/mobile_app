import {httpService} from "../../utils/http/http";
import actions from '../actions';
import settings from '../../utils/settings';
import {
   EXAMPLE_REQUEST
} from "../actions/reservation";
import NavigationService from "../../navigation/NavigationService";
import Toast from "react-native-root-toast";
import i18n from "../../utils/i18n";
import utils from '../../utils/index';
import {fileUploadService} from "../../utils/amazon/fileUpdate";
import { GET } from "../../utils/http/routes/methods";
import * as fs from "react-native-fs";

const reservationMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
       case EXAMPLE_REQUEST:
            httpService.exampleRequest(action.id).then(res => {
                dispatch(actions.reservation.exampleResponse(res));
            }).catch(err => {
                dispatch(actions.reservation.exampleError(err))
            });
            break;

    }
};


export default reservationMiddleware;
