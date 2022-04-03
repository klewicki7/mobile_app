import { httpService } from "../../utils/http/http";
import actions from '../actions';
//Se importa el action Request
import {
    EXAMPLE_REQUEST,LISTADO_REQUEST, INSERT_CLIENT_REQUEST
} from "../actions/user";
import NavigationService from "../../navigation/NavigationService";
import utils from '../../utils/index';
import SplashScreen from "../../utils/splash-screen";

const userMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    switch (action.type) {
        case EXAMPLE_REQUEST:
            httpService.exampleRequest(action.id).then(res => {
                dispatch(actions.user.exampleResponse(res));
            }).catch(err => {
                dispatch(actions.user.exampleError(err))
            });
            break;
        case LISTADO_REQUEST:
            httpService.ListadoRequest().then(res => {
                dispatch(actions.user.listadoResponse(res));
            }).catch(err => {
                dispatch(actions.user.listadoError(err))
            });
            break;
        case INSERT_CLIENT_REQUEST:
            //Se crea un body con los datos del cliente
            let body= {
                nombre: action.nombre,
                apellido: action.apellido
            }
            //Llamamos el hhtpService para comunicarnos con el WS,luego le pasamos el body
            httpService.insertClientRequest(body).then(res => {
                dispatch(actions.user.insertClientResponse(res));
            }).catch(err => {
                dispatch(actions.user.insertClientError(err))
            });
            break;
    }
};

export default userMiddleware;
