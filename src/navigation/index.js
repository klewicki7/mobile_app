import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import settings from '../utils/settings';
import {HomeScreens} from './HomeNavigator';
import {drawerNavigator} from './MainNavigator';


const AppRouteConfigs = {
    ...HomeScreens,
    Drawer: {screen: drawerNavigator},
};

const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'Initial',
    defaultNavigationOptions: {
        gesturesEnabled: false,
    },
};

const MainAppNavigator = createAppContainer(createStackNavigator(AppRouteConfigs, stackNavigatorConfiguration));

const defaultGetStateForAction = MainAppNavigator.router.getStateForAction;

const modifyBackFlow = (getStateForAction) => (action, state) => {

    if (action.type === 'Navigation/BACK' && state) {
        const currentRoute = state.routes[state.index];

        if (currentRoute.routeName === 'HomeCashier' || currentRoute.routeName === 'HomeCommerce') {
            const currentHomeRoute = currentRoute.routes[currentRoute.index];
            if (currentHomeRoute.routeName === 'HomeStack' && currentHomeRoute.index === 0) {
                return state;
            }
        }

        if (currentRoute.routeName === 'HomeCashier') {
            const currentHomeRoute = currentRoute.routes[currentRoute.index];

            if (currentHomeRoute.routeName === 'CashierReceiveStack' && currentHomeRoute.index === 0) {
                return state;
            }
        }

        if (currentRoute.routeName === 'Tutorial' && currentRoute.index === 0) {
            return state;
        }

        //Don't go back from RegisterWelcome
        // const initialRoutes = ['CommerceLogin', 'CashierLogin'];
        // if (initialRoutes.indexOf(currentRoute.routeName) !== -1) {
        //     return state;
        // }

        //Don't go back to Loading
        const newRoutes = state.routes.filter(r => r.routeName !== 'Loading');
        const newIndex = newRoutes.length - 1;
        return getStateForAction(action, {...state, index: newIndex, routes: newRoutes});
    }
    return getStateForAction(action, state);
};

const exitOnDoubleTap = (getStateForAction) => (action, state) => {
    const resultState = getStateForAction(action, state);
    if (action.type === 'Navigation/BACK' && state && resultState === state) {
        if (resultState.tryToExit && Date.now() - resultState.tryToExit <= settings.doubleBackExitTime) {
            delete resultState.tryToExit;
            return resultState;
        } else {
            return {...resultState, tryToExit: Date.now()};
        }
    } else {
        return resultState;
    }
};

// MainAppNavigator.router.getStateForAction = exitOnDoubleTap(modifyBackFlow(defaultGetStateForAction));
MainAppNavigator.router.getStateForAction = exitOnDoubleTap(defaultGetStateForAction);

export default MainAppNavigator;
