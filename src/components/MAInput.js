import React from 'react';
import { StyleSheet, View} from "react-native";
import { Input } from "native-base";
import scale from "../utils/scaling/scale";
import Colors from "../constants/Colors";

const MAInput = (props) => {
    return (
        <View style={ props.notLastInput ?  [props.containerStyle, styles.notLastInput] : props.containerStyle }>
            <Input {...props} style={props.valid ? [props.inputStyle, styles.valid] : props.inputStyle }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    notLastInput: {
        marginBottom: scale(4),
    },
    valid: {
        
    }
});

export default MAInput;
