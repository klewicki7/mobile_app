import {Image, StyleSheet, View} from "react-native";
import {H4} from "./MAText";
import Colors from "../constants/Colors";
import React from "react";
import scale from "../utils/scaling/scale";

const Travel = (props) => (
    <View style={props.first ? {...styles.row, borderTopColor: Colors.grey, borderTopWidth: 0.5} : styles.row}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.travel.image}/>
        </View>
        <View style={{flex: 5}}>
            <H4 color={Colors.darkGrey}>{props.travel.dropOffDate}</H4>
        </View>
        <View style={{flex: 1}}>
            <H4 color={Colors.darkGrey}></H4>
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
        height: scale(24),
    },
});

export default Travel;