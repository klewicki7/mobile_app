import {Image, StyleSheet, View,TouchableOpacity} from "react-native";
import GeneralStyles from '../constants/styles/general';
import {H2,H3,H3_5,H4, H5,H5_5,H5_8,H6} from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import MALine from "./MALine";
import React from "react";
import MAInput from '../components/MAInput'
import scale from "../utils/scaling/scale";
import {parseCurrency} from "../utils/currency";
import frente from '../../assets/images/partes/frente.png';
import trasera from '../../assets/images/partes/trasera.png';
import lado1 from '../../assets/images/partes/lado1.png';
import lado2 from '../../assets/images/partes/lado2.png';
import odometro from '../../assets/images/partes/odometer.jpg';
import comb from '../../assets/images/partes/fuel.jpg';
import contrato from '../../assets/images/partes/contrato.png';
import {PrimaryButton} from '../components/MAButton'
import { ScrollView } from "react-native";

const Zone = (Id) => {
    switch (Id) {
        case 1: return i18n.t('reportDamage.Front')
            
        case 2: return i18n.t('reportDamage.FLeft')
            
        case 3: return i18n.t('reportDamage.RLeft')
            
        case 4: return i18n.t('reportDamage.Rear')
         
        case 5: return i18n.t('reportDamage.RRight')
                      
        case 6: return i18n.t('reportDamage.FRight')
           
        case 14: return i18n.t('reportDamage.IntF')
            
        case 15: return i18n.t('reportDamage.IntR')
            
        default:
            break;
    }

}
const render = (Damage) => {
    return ( 
        Damage.map((Damage) =>
        
            
            <View style={{...styles.containerImg}}>
            
                <View><Image source={{uri: Damage.path}} style={{...styles.img}}/></View>
            
                 <View style={{alignItems:'flex-start', display:'flex', flexWrap:'wrap',paddingLeft:scale(4)}}><H5 color={'orange'}>{Zone(Damage.zone)}</H5></View>
            </View>
    ) 
    )
}
const DamageView = (props) => (
    <View style={{...styles.container}}>
        {render(props.Damage)}
         </View>
 
);
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexWrap:'wrap',
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:scale(30),

    },
    containerImg:{
        width: scale(75),
        marginRight:scale(10),
        backgroundColor: 'white',
        marginLeft:scale(10),
        marginTop:scale(10),
        marginBottom:scale(15),
        borderTopLeftRadius:scale(4),
        borderTopRightRadius:scale(4)
    },
    img:{
        width:'100%', 
        height:scale(50),
        borderTopLeftRadius:scale(4),
        borderTopRightRadius:scale(4)
    }
});

export default DamageView;
