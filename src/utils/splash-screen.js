import SplashScreen from 'react-native-splash-screen';

const hide = () => setTimeout(() => SplashScreen.hide(), 500);

export default {
    hide,
}