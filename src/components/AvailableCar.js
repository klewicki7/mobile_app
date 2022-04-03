import {Image, StyleSheet, View} from "react-native";
import {H4, H5} from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import MALine from "./MALine";
import React from "react";
import scale from "../utils/scaling/scale";
import {parseCurrency} from "../utils/currency";

const devolverKm = (id) => {
    switch (id) {
        case 1: return '200 Km';
        case 2: return 'Km Libre';
        case 3: return '0 Km';
        case 4: return '400 Km';
        case 5: return 'Otro KM';
    }
}

const AvailableCar = (props) => (
    <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.car.UrlVehiclePicture}}/>
        </View>
        <View style={{flex: 2}}>
            <H4 color={Colors.darkGrey}>{props.car.NomModelo} {'o similar'}</H4>
            <H5 color={Colors.primaryColor}>{props.car.vehiculo_categoria}</H5>
            <H5 color={Colors.primaryColor}>{devolverKm(props.car.IdKm)}</H5>
            <H5 color={Colors.primaryColor}>{i18n.t('location').toUpperCase()}</H5>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <H5 color={Colors.primaryColor}>{props.location.Address}</H5>
                
                {
                    props.car.costoTotalConDescuento &&
                    <H4 color={Colors.darkGrey} style={{textDecorationLine: 'line-through'}}>{parseCurrency(props.car.costoTotal)}</H4>
                }
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <H5 color={Colors.primaryColor}>{props.car.state}</H5>
                <H4 bold color={Colors.darkGrey}>{props.car.costoTotalConDescuento ? parseCurrency(props.car.costoTotalConDescuento) : parseCurrency(props.car.costoTotal)}</H4>
            </View>
            <MALine/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: scale(36),
        width: '100%'
    },
});

export default AvailableCar;
