import React from 'react';
import {Image, View} from "react-native";
import GeneralStyles from '../constants/styles/general';
import vwLogo from "../../assets/images/header.png";
import {H1, H3} from "./MAText";
import i18n from "../utils/i18n";
import Colors from "../constants/Colors";
import scale from "../utils/scaling/scale";

const MALogo = (props) => (
    <View style={{...props.style, alignItems: 'center'}}>
        <View style={GeneralStyles.logoContainer}>
            <Image source={vwLogo} style={GeneralStyles.logo}/>
        </View>
        <View style={GeneralStyles.appNameContainer}>
            <H1 bold color={Colors.white}>{i18n.t('appName1')}</H1>
            <H1 bold color={Colors.white}>{i18n.t('appName2')}</H1>
            <H1 bold color={Colors.grey}>{i18n.t('appName3')}</H1>
        </View>
    </View>
);

const MALogoWelcome = (props) => (
    <View style={{...props.style, alignItems: 'center'}}>
        <View style={GeneralStyles.appNameContainer}>
            <H1 bold color={Colors.white}>{i18n.t('appName1')}</H1>
            <H1 bold color={Colors.white}>{i18n.t('appName2')}</H1>
            <H1 bold color={Colors.grey}>{i18n.t('appName3')}</H1>
        </View>
        <View style={{width: scale(120),height: scale(10),justifyContent: 'center',alignItems: 'center'}}>
        </View>
    </View>
);

const MALogoHorizontal = (props) => (
    <View style={{...props.style, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{paddingLeft:scale(1), paddingRight:scale(1)}}></View>
        <View style={GeneralStyles.logoContainerSmall}>
            <Image source={vwLogo} style={GeneralStyles.logo}/>
        </View>
        <View style={{paddingLeft:scale(60), paddingRight:scale(20)}}>
        <View style={{...GeneralStyles.appNameContainer, marginTop: 0, marginLeft: 6}}>
           
        </View>
        <View style={{paddingLeft:scale(20), paddingRight:scale(1)}}></View>
            
        </View>
        
    </View>
);
const MALogoHorizontalMenu = (props) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={GeneralStyles.logoContainerSmall}>
            <Image source={vwLogo} style={GeneralStyles.logo}/>
        </View>
        <View style={{paddingLeft:scale(30)}}></View>
        <View style={{...GeneralStyles.appNameContainer, marginTop: 0, marginLeft: 6}}>
            <H3 bold color={Colors.white}>{i18n.t('appName1')}</H3>
            <H3 bold color={Colors.white}>{i18n.t('appName2')} </H3>
            <H3 bold color={Colors.grey}>{i18n.t('appName3')}</H3>
        </View>
        
    </View>
);

export {MALogo, MALogoHorizontal,MALogoWelcome, MALogoHorizontalMenu};