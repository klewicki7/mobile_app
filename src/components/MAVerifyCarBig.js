import React from 'react';
import {StyleSheet, View} from "react-native";
import scale from "../utils/scaling/scale";
import {H3} from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import MAVerifyPhoto from './MAVerifyPhoto'

const MAVerifyCarBig = (props) => {
    return (
        <View style={{...props.style}}>
            <View style={styles.container}>
                <H3 bold color={Colors.darkGrey}>{props.title}</H3>
            </View>
            <View>
                <MAVerifyPhoto
                    imageStyle={{height: scale(300), width: scale(240)}}
                    image={props.image}
                    onNoPress={props.onNoPress}
                    onYesPress={props.onYesPress}
                    pending={props.pending}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: scale(12)
    }
});

export default MAVerifyCarBig;
