import {StyleSheet, View, Image, TouchableOpacity,ImageBackground,TouchableWithoutFeedback} from 'react-native';
import {H2,H3,H4, H5,H5_5,H6} from "./MAText";
import Colors from "../constants/Colors";
import i18n from "../utils/i18n";
import MALine from "./MALine";
import GeneralStyles from '../constants/styles/general';
import {PrimaryButton} from "../components/MAButton";
import React from "react";
import scale from "../utils/scaling/scale";
import {parseCurrency} from "../utils/currency";
import moment from 'moment';
import PropTypes from 'prop-types';
import FrenteDmg from '../../assets/images/partes/FrenteDmg.png';
import Lado1Dmg from '../../assets/images/partes/Lado1Dmg.png';
import TraseraDmg from '../../assets/images/partes/TraseraDmg.png';
import Lado2Dmg from '../../assets/images/partes/Lado2Dmg.png';
import Lado3 from '../../assets/images/partes/lado3.png';
import Lado4 from '../../assets/images/partes/lado4.png';
import IntD from '../../assets/images/partes/intD.png';
import IntT from '../../assets/images/partes/intT.png';
import Choque from '../../assets/images/partes/choque.png';
import Rayon from '../../assets/images/partes/puerta.png';
import vidrio from '../../assets/images/partes/vidrio.png';
import { back } from 'react-native/Libraries/Animated/src/Easing';


const TouchDmg = (props) => (
            <View>
                <View style={styles.container}>
                    <View style={{flexDirection:'column', height:scale(150),paddingTop:scale(10)}}>
                        <View style={{paddingBottom:scale(10),alignItems:'center'}}><H4 color={'white'}>{i18n.t('reportDamage.selectZone')}</H4></View>
                        

                        <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
                            <View style={{...styles.containerButton , borderColor: props.color === 1 ? 'rgb(13, 93, 35)' : 'transparent'}}>
                                <TouchableOpacity onPress={props.btnDelantera}>
                                    <View><Image source={FrenteDmg} style={{...styles.imgButton}}/></View>
                                    
                                </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton, borderColor: props.color === 2 ? 'rgb(13, 93, 35)' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnLado1}>
                                <View><Image source={Lado1Dmg} style={{...styles.imgButton}}/></View>
                               
                            </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton, borderColor: props.color === 3 ? 'rgb(13, 93, 35)' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnLado2}>
                                <View><Image source={Lado2Dmg} style={{...styles.imgButton}}/></View>
                               
                            </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton, borderColor: props.color === 4 ? 'rgb(13, 93, 35)' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnTrasera}>
                                <View><Image source={TraseraDmg} style={{...styles.imgButton}}/></View>
                                
                            </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
                        
                            <View style={{...styles.containerButton, borderColor: props.color === 5 ? 'rgb(13, 93, 35)' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnLado4}>
                                <View><Image source={Lado4} style={{...styles.imgButton}}/></View>
                                
                            </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton, borderColor: props.color === 6 ? 'rgb(13, 93, 35)' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnLado3}>
                                <View><Image source={Lado3} style={{...styles.imgButton}}/></View>
                                
                            </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton, borderColor: props.color === 14 ? 'rgb(13, 93, 35)' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnIdelantera}>
                                <View><Image source={IntD} style={{...styles.imgButton}}/></View>
                                
                            </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton, borderColor: props.color === 15 ? 'rgb(13, 93, 35)' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnITrasera}>
                                <View><Image source={IntT} style={{...styles.imgButton}}/></View>
                                
                            </TouchableOpacity>
                            
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', height:scale(100),paddingTop:scale(10),backgroundColor:'transparent'}}>
                    <View style={{paddingBottom:scale(10),alignItems:'center'}}><H4 color={'white'}>{i18n.t('reportDamage.selectType')}</H4></View>
                    <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
                            <View style={{...styles.containerButton2, borderColor: props.colorDmg === 1 ? 'white' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnChoque}>
                                <View><Image source={Choque} style={{...styles.imgButton2}}/></View>
                               
                            </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton2, borderColor: props.colorDmg === 2 ? 'white' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnRayon}>
                                <View><Image source={Rayon} style={{...styles.imgButton2}}/></View>
                               
                            </TouchableOpacity>
                            </View>
                            <View style={{...styles.containerButton2, borderColor: props.colorDmg === 3 ? 'white' : 'transparent' }}>
                            <TouchableOpacity onPress={props.btnVidrio}>
                                <View><Image source={vidrio} style={{...styles.imgButton2}}/></View>
                                
                            </TouchableOpacity>
                            </View>
                        </View>
                        </View>
            </View>
            </View>
            
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    imgButton: {
        width:'100%', 
        height:scale(50),
        resizeMode: 'contain',
        

    },
    buttonText:{
        backgroundColor:'white',
        paddingLeft:scale(0.99)
        
    },
    containerButton:{
        backgroundColor:'white', 
        height:scale(50) ,
        width:scale(65),
        borderTopLeftRadius:scale(6),
        borderTopRightRadius:scale(6),
        borderBottomLeftRadius:scale(6),
        borderBottomRightRadius:scale(6),
        borderWidth: scale(1.5),
        borderColor:'transparent'
    },
    imgButton2: {
        width:'100%', 
        height:scale(50),
        resizeMode: 'contain',
        

    },
    buttonText2:{
        backgroundColor:'white',
        paddingLeft:scale(0.99)
        
    },
    containerButton2:{
        backgroundColor:'transparent', 
        height:scale(53) ,
        width:scale(53),
        borderRadius:scale(30),
        borderWidth: scale(1.2),
        borderColor:'transparent'
    }
});
    
export default TouchDmg;
