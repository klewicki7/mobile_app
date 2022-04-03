import React from 'react';
import {StyleSheet, TouchableOpacity, View, ScrollView, SafeAreaView,Image} from 'react-native';
import {DrawerItems} from "react-navigation-drawer";
import {H5, H6} from '../components/MAText';
import actions from "../redux/actions";
import store from '../store';
import i18n from '../utils/i18n';
import Colors from "../constants/Colors";
import {Icon} from "native-base";
import scale from "../utils/scaling/scale";
import MALine from "./MALine";
import settings from '../utils/settings';
import ES_es from '../../assets/images/flags/ES.png';
import En_eu from '../../assets/images/flags/EEUU.png';
import Fr_fr from '../../assets/images/flags/FR.png';

const onChangeLanguage = (languageSelected ) => {
   console.log(languageSelected)
    //this.props.setLanguageUser(value)
    i18n.locale = languageSelected
    

    // _storeData (USER_LANGUAGE, valor);
    }
export const MADrawer = (props) => (

    <ScrollView contentContainerStyle={styles.main}>
        <SafeAreaView style={{flex: 1}}>
            <DrawerItems {...props} />
                        {/* <View style={styles.flagsContainer}>

                            <TouchableOpacity onPress={()=> onChangeLanguage('es')}>
                                <Image source={ES_es} style={styles.flags}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> onChangeLanguage('en')}>
                                <Image source={En_eu} style={styles.flags}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> onChangeLanguage('fr')}>
                                <Image source={Fr_fr} style={styles.flags}/>
                            </TouchableOpacity>

                         </View> */}
                   
        
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
                <MALine/>
                <TouchableOpacity style={styles.drawerItem} onPress={() => store.dispatch(actions.leasing.logout())}>
                    <Icon
                        style={styles.icon}
                        type={'MaterialCommunityIcons'} name={'logout'}
                    />
                    <H5 color={Colors.primaryColor}>LogOut</H5>
                </TouchableOpacity>
                <View style={{height: 24, backjustifyContent: 'center', alignItems: 'center'}}>
                    <H6 color={Colors.primaryColor}>v{settings.version}</H6>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    main: {
        flexGrow : 1,
        flex: 1
    },
    icon: {
        color: Colors.primaryColor,
        marginRight: 4,
        alignSelf: 'center',
        fontSize: scale(18),
    },
    drawerItem: {
        flexDirection: 'row',
        height: 54,
        marginLeft: 12,
        alignItems: 'center'
    },
    flags:{
        marginTop:scale(10),
        marginHorizontal:scale(10) ,
        width: scale(35),
        height: scale(25)
    },
    flagsContainer:{ 
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:scale(5),
        paddingRight:scale(10),
    },
});
