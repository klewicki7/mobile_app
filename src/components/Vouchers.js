import {Image, StyleSheet, View} from "react-native";
import {H4} from "./MAText";
import Colors from "../constants/Colors";
import React from "react";
import scale from "../utils/scaling/scale";

const Travel = (props) => (
    <View style={props.first ? {...styles.row, borderTopColor: Colors.grey, borderTopWidth: 0.5} : styles.row}>
        <View style={styles.imageContainer,{flex: 3}}>
            <Image style={styles.image} source={{uri: props.travel.UrlVehiclePicture}}/>
        </View>
        <View style={{flex: 5}}>
            <H4 color={Colors.darkGrey}>Date From: {props.travel.date_from}</H4>
        </View>
        <View style={{flex: 5}}>
            <H4 color={Colors.darkGrey}>Date Up: {props.travel.date_up}</H4>
        </View>
        <View style={{flex: 1}}>
            <H4 color={Colors.darkGrey}>></H4>
        </View>
    </View>
);

const styles = StyleSheet.create({
    row: {
        paddingVertical: scale(6),
        flexDirection: 'row',
        borderBottomColor: Colors.grey,
        borderBottomWidth: 0.5,
        alignItems: 'center'
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: scale(50),
        width: '80%'
    },
});

export default Travel;