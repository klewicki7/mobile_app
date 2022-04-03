import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from "react-native";
import {Icon} from "native-base";
import scale from "../utils/scaling/scale";
import {H4, H5} from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import {PrimaryButton, UploadButton} from "./MAButton";

const MAPhotoUpload = (props) => {
    return (
        <View style={{...props.style, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            {
                props.image && props.image !== '' ?
                    <Image key={props.image} style={styles.image} source={{uri: props.image}}/> :
                    props.isDamage ?
                        <Icon
                            style={{...styles.icon, fontSize: scale(36), color: Colors.secondaryColor}}
                            type={'FontAwesome5'} name={'car-crash'}
                        /> :
                        <Icon
                            style={{...styles.icon, fontSize: scale(50), color: Colors.yellow}}
                            type={'FontAwesome'} name={'user-circle'}
                        />
            }
            <View style={{flexDirection: 'column', flex: 1, marginLeft: scale(12)}}>
                {
                    props.label &&
                    <H4 color={Colors.white}>{props.label}</H4>
                }
                {
                    !props.image || props.image === '' ?
                        <UploadButton backgroundColor={Colors.yellow} onPress={() => props.openCamera()}>
                            <H4 color='purple'>{i18n.t('idUploads.uploadPhoto')}</H4>
                            <Icon
                                style={{...styles.icon, color: 'purple'}}
                                type={'Ionicons'} name={props.isDamage ? 'md-camera' : 'cloud-upload'}
                            />
                        </UploadButton> :
                        <UploadButton backgroundColor={Colors.green} onPress={() => props.openCamera()}>
                            <H4 color='white'>{i18n.t('idUploads.imageSent')}</H4>
                            <Icon
                                style={{...styles.icon, color: 'white'}}
                                type={'Ionicons'} name={'checkmark-circle'}
                            />
                        </UploadButton>
                }
            </View>
        </View>
    )
};

const MADamageUpload = (props) => (
    <View style={{...props.style}}>
        <View style={styles.imageContainer}>
            {
                props.image && props.image !== '' ?
                    <Image resizeMode="contain" key={props.image} style={styles.damageImage} source={{uri: props.image}}/> :
                    <TouchableOpacity onPress={() => props.openCamera()}>
                        <Image style={styles.damagePlaceHolder} source={props.placeholder}/>
                    </TouchableOpacity>
            }
        </View>
    </View>
);

const styles = StyleSheet.create({
    image: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(40),
        overflow: 'hidden',
    },
    icon: {
        alignSelf: 'center',
        fontSize: scale(32),
    },
    imageContainer: {
        height: scale(80),
        justifyContent: 'center',
        alignItems: 'center',
    },
    damageImage: {
        height: '100%',
        width: '100%',
    },
    damageIcon: {
        color: Colors.primaryColor,
        opacity: 0.5,
        alignSelf: 'center',
        fontSize: scale(36),
    },
    damagePlaceHolder: {
        resizeMode: 'contain',
        height: '100%',
    },
    button: {
        flex: 1,
        height: scale(24),
        marginHorizontal: 0,
        marginVertical: 0,
        marginTop: scale(6)
    }
});

export {MAPhotoUpload, MADamageUpload};
