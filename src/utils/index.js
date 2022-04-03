import i18n from './i18n';
import {PermissionsAndroid} from 'react-native';
import Toast from 'react-native-root-toast';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getMonthString = (month) => {
    switch (month) {
        case 0: return i18n.t('jan');
        case 1: return i18n.t('feb');
        case 2: return i18n.t('mar');
        case 3: return i18n.t('apr');
        case 4: return i18n.t('may');
        case 5: return i18n.t('jun');
        case 6: return i18n.t('jul');
        case 7: return i18n.t('aug');
        case 8: return i18n.t('sep');
        case 9: return i18n.t('oct');
        case 10: return i18n.t('nov');
        case 11: return i18n.t('dic');
    }
};

export default {
    isInteger: (str) => /^[0-9]*$/.test(str),
    validEmail: (email) => emailRegex.test(email),
    dateToString: (date) =>
        `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${i18n.t('dateToTime')} ${date.getHours()}:${("0" + date.getMinutes().toString()).slice(-2)}`,
    parseDateForRequest: (date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
    parseTimeForRequest: (date) => `${date.getHours()}:${("0" + date.getMinutes().toString()).slice(-2)}`,
    parseDateForDisplay: (date) => `${getMonthString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`,
    generateSMSCode: () => Math.floor(1000 + Math.random() * 9000),
    mpsDateTimeToDate: (date, time) => {
        let dateAux = date.split('-');
        let timeAux = time.split(':');
        return new Date(dateAux[0], dateAux[1] - 1, dateAux[2], timeAux[0], timeAux[1], timeAux[2]);
    },
    toast: (msj) => Toast.show(msj, {duration: 3500,position: Toast.positions.BOTTOM,shadow: true,animation: true,hideOnPress: true,delay: 0,})
    
};


export async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('GRANTED');
            return granted
        } else {
            console.log('NOT GRANTED');
            return false
        }
    } catch (err) {
        console.warn(err);
    }
}
