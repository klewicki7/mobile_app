import {applyMiddleware, combineReducers, createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from "redux-persist";
import user from './redux/reducers/user';
import ui from './redux/reducers/ui';
import auth from './redux/reducers/auth';
import reservation from './redux/reducers/reservation';
import leasing from './redux/reducers/leasing';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import sessionMiddleware from './redux/middlewares/session';
import userMiddleware from './redux/middlewares/user';
import reservationMiddleware from './redux/middlewares/reservation';
import authMiddleware from './redux/middlewares/auth';
import vehicleMiddleware from './redux/middlewares/vehicle';
import leasingMiddleware from './redux/middlewares/leasing';

const appReducer = combineReducers({
    user,
    ui,
    auth,
    reservation,
    leasing,
});

let middleware = [
    thunk,
    sessionMiddleware,
    userMiddleware,
    reservationMiddleware,
    authMiddleware,
    vehicleMiddleware,
    leasingMiddleware
];

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger];
}

const appMiddleware = applyMiddleware(...middleware);

const persistConf = {key: 'root', storage: AsyncStorage, blacklist: ['ui']};
const persistedReducer = persistReducer(persistConf, appReducer);

const store = createStore(
    persistedReducer,
    appMiddleware,
);

export const persistor = persistStore(store);

export default store;
