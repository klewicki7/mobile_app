import { LOGIN_RESPONSE, LOGIN_LEASING_RESPONSE, PLAN_RESPONSE } from '../actions/session';
import { LOGOUT } from "../actions/leasing"
import settings from '../../utils/settings';

const initialState = {
    loggedIn: false,
    Colors: {
        backgroundColor: '#2F4F4F',
        secondaryColor: '#ffff',
        facebook: 'rgb(111, 133, 177)',
        grey: 'rgb(130, 140, 150)',
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        purple: 'rgb(128, 0, 128)',
        darkGrey: 'rgb(255, 255, 0)',
        green: 'rgb(12, 110, 77)',
        yellow: 'rgb(255, 255, 0)',
        greenMrp: 'rgb(11, 107, 4)',
        orange: '#FFAC63',
        menupurple: 'rgb(37, 0, 46)',

    },
    DATA: [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },],
    jwt: null,
    jwtDate: undefined,
    jwtExpiration: null,
    refreshToken: null,
    refreshExpiration: null,
    refreshPending: false,
    refreshPromise: null,
    plan: undefined
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_RESPONSE:
            return { ...state, loggedIn: true, jwt: action.res.token, jwtDate: new Date() };
        case LOGIN_LEASING_RESPONSE:
            return { ...state, loggedIn: true, jwt: action.res.token, jwtDate: new Date() };
        case PLAN_RESPONSE:
            return { ...state, plan: action.res };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default auth;
