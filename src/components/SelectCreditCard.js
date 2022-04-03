import {Image, StyleSheet, View,ImageBackground} from "react-native";
import {H3,H4, H5} from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import MALine from "./MALine";
import React from "react";
import scale from "../utils/scaling/scale";
import {parseCurrency} from "../utils/currency";

const SelectCreditCard = (props) => (
    <View style={{flexDirection: 'row', paddingBottom:scale(20)}}>
        <ImageBackground source={require('../../assets/images/card-front.png')} style={{width: '100%', height: '100%', borderRadius: 25 }}
  imageStyle={{ borderRadius: 25 }}>
        <View style={{flex: 2}}>
        <H3 color={'white'}>{'  •••• •••• •••• '}{props.tc.TC1 ||props.tc.TC2 ||props.tc.TC3}</H3>
        <View style={{flexDirection: 'row'}}>
                <H3 style ={{flex: 3, paddingLeft: scale(10)}}color={'white'}>{props.tc.TC_Name}</H3>
            </View>  
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <H3 style={{flex: 3}} color={'white'}>{'  '}{props.tc.Venc1 || props.tc.Venc2 ||props.tc.Venc3}</H3>
            
            <View style={styles.imageContainer,{marginLeft: scale(10), marginBottom: scale(5),flex: 2,}}>
                <Image style={styles.image} source={{uri: props.tc.Mtc}}/>
            </View>  
        </View>
    </View>
        </ImageBackground>
        <MALine/>
    </View>
);

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: scale(40),
        width: '100%'
    },
});

export default SelectCreditCard;