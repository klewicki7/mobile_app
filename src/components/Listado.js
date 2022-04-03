import { Image, StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { H4, H5, H5_5, H6 } from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import MALine from "./MALine";
import GeneralStyles from '../constants/styles/general';
import { PrimaryButton } from "../components/MAButton";
import React from "react";
import scale from "../utils/scaling/scale";
import { parseCurrency } from "../utils/currency";
import moment from 'moment';
import PropTypes from 'prop-types';
import pickup from '../../assets/images/pickup.png';
import dropoff from '../../assets/images/dropoff.png';
import pickup2 from '../../assets/images/pickup2.png';
import dropoff2 from '../../assets/images/dropoff2.png';

const Listado = (props) => (
    <View style={styles.data}>
        <H5_5 color={Colors.green}>{'nombre:'+ props.data.nombre}</H5_5>
        <H5_5 color={Colors.green}>{'apellido:' + props.data.apellido}</H5_5>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: scale(270),
        borderRadius: 9,
        borderWidth: 0.1,
        paddingBottom: scale(10),
        paddingTop: scale(10),
        marginBottom: scale(5),
        flexDirection: 'row', alignItems: 'center'

    },
    containerSearch: {
        backgroundColor: 'transparent',
        width: scale(1),
        paddingBottom: scale(1),
        marginBottom: scale(1)

    },
    data: {
        paddingLeft: scale(10),
        flex: 1
    },
    containerButton: {
        backgroundColor: 'white',
        height: scale(50),
        width: scale(65),
        borderTopLeftRadius: scale(6),
        borderTopRightRadius: scale(6),
        borderBottomLeftRadius: scale(6),
        borderBottomRightRadius: scale(6),
    },
    buttons: {
        width: scale(90),
        borderWidth: 0.1,
        borderRadius: 19,
    }, imgButton: {
        width: '100%',
        height: scale(50),
        resizeMode: 'contain',
    },
});

export default Listado;
