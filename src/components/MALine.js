import React from 'react';
import {StyleSheet, View} from "react-native";
import scale from "../utils/scaling/scale";

const MALine = () => <View style={styles.line}/>;

const styles = StyleSheet.create({
    line: {
        marginVertical: scale(6),
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    }
});

export default MALine;
