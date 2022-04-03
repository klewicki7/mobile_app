import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon} from "native-base";
import scale from "../utils/scaling/scale";
import i18n from '../utils/i18n';
import GeneralStyles from "../constants/styles/general";
import Colors from "../constants/Colors";
import {H4, H5} from "./MAText";

const IconButton = (props) => (
    <Button
        style={{
            ...GeneralStyles.iconButton,
            ...props.style,
            backgroundColor: props.backgroundColor,
            borderColor: props.borderColor,
            borderWidth: props.borderColor ? 1 : 0
        }}
        elevation={0}
        disabled={props.disabled}
        onPress={props.onPress}
    >
        {props.children}
    </Button>
);

const SmallIconButton = (props) => (
    <Button
        style={{
            ...GeneralStyles.smallIconButton,
            ...props.style,
            backgroundColor: props.backgroundColor,
            borderColor: props.borderColor,
            borderWidth: props.borderColor ? 1 : 0
        }}
        elevation={0}
        disabled={props.disabled}
        onPress={props.onPress}
    >
        {props.children}
    </Button>
);

const VerticalIconButton = (props) => (
    <Button
        style={{
            ...GeneralStyles.verticalIconButton,
            ...props.style,
            backgroundColor: props.backgroundColor,
            borderColor: props.borderColor,
            borderWidth: props.borderColor ? 1 : 0
        }}
        elevation={0}
        disabled={props.disabled}
        onPress={props.onPress}
    >
        {props.children}
    </Button>
);

const PrimaryButton = (props) => (
    <Button
        style={{
            ...GeneralStyles.primaryButton,
            ...props.style,
            backgroundColor: props.color ? props.color : Colors.primaryColor,
            borderColor: props.borderColor,
            borderWidth: props.borderColor ? 1 : 0
        }}
        elevation={0}
        disabled={props.disabled}
        onPress={props.onPress}
    >
        {props.children}
    </Button>
);

const NextButton = (props) => (
    <Button
        style={{
            ...GeneralStyles.nextButton,
            borderColor: props.borderColor,
            borderWidth: props.borderColor ? 1 : 0
        }}
        elevation={0}
        onPress={props.onPress}
        disabled={props.disabled}
    >
        <H5 color={Colors.primaryColor}>{i18n.t('next')}</H5>
        <Icon
            style={{...styles.icon, color: Colors.primaryColor}}
            type={'Ionicons'} name={'md-fastforward'}
        />
    </Button>
);

const PrevButton = (props) => (
    <Button
        style={{
            ...GeneralStyles.prevButton,
            ...props.style,
            borderColor: props.borderColor,
            borderWidth: props.borderColor ? 1 : 0
        }}
        elevation={0}
        onPress={props.onPress}
        disabled={props.disabled}
    >
        <Icon
            style={{...styles.icon, color: Colors.white}}
            type={'Ionicons'} name={'arrow-back'}
        />
        <H5 color={Colors.white}>{i18n.t('previous')}</H5>
    </Button>
);

const NextPrevButton = (props) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <PrevButton disabled={props.disablePrev} onPress={props.onPrevPress}/>
        <NextButton disabled={props.disableNext} onPress={props.onNextPress}/>
    </View>
);

const PrevLoginButton = (props) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <PrevButton style={{flex: 1}} disabled={props.disablePrev} onPress={props.onPrevPress}/>
        <IconButton
            style={{flex: 1, justifyContent: 'center', height: scale(36)}}
            backgroundColor={Colors.secondaryColor}
            disabled={props.disableLogin}
            onPress={props.onLoginPress}
        >
            <Icon
                type={'Ionicons'} name={'md-lock'}
            />
            <H4 color='white'>{i18n.t('loginWelcome.login')}</H4>
        </IconButton>
    </View>
);

const PrevEndButton = (props) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <PrevButton style={{flex: 1}} disabled={props.disablePrev} onPress={props.onPrevPress}/>
        <PrimaryButton
            style={{flex: 1, justifyContent: 'center', height: scale(36)}}
            backgroundColor={Colors.primaryColor}
            disabled={props.disableEnd}
            onPress={props.onEndPress}
        >
            <H4 color='white'>{i18n.t('activeContract.endContract')}</H4>
        </PrimaryButton>
    </View>
);

const UploadButton = (props) => (
    <Button
        style={{
            ...GeneralStyles.uploadButton,
            backgroundColor: props.backgroundColor,
            borderColor: props.borderColor,
            borderWidth: props.borderColor ? 1 : 0
        }}
        elevation={0}
        disabled={props.disabled}
        onPress={props.onPress}
    >
        {props.children}
    </Button>
);

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        fontSize: scale(18),
    },
    buttons: {
        width: scale(150),
        height: scale(50),
        borderRadius: 11,
        borderWidth: 1,
        borderColor: Colors.lighterBlue,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
      },
});

export { IconButton, SmallIconButton, VerticalIconButton, PrimaryButton, NextButton, PrevButton, NextPrevButton, PrevLoginButton, PrevEndButton, UploadButton }