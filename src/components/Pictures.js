import {Image, StyleSheet, View,TouchableOpacity} from "react-native";
import GeneralStyles from '../constants/styles/general';
import {H2,H3,H3_5,H4, H5,H5_5,H6} from "./MAText";
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


const Pictures = (props) => (
    <View>
        <View style={{flex:1, alignItems:'center', flexDirection:'row',marginBottom:scale(15),marginTop:scale(10),alignSelf: 'center'}}>
            <H3_5 style={{fontWeight: "bold"}} color={'rgb(11, 107, 4)'}>{i18n.t('extras.title')}</H3_5>
        </View>
        <View style={{flex:1, alignItems:'center', flexDirection:'row',marginBottom:scale(35),marginLeft:'25%',marginRight:'20%'}}>
            {props.ItsInteriorF === true ?
                <View style={{width: scale(85),marginRight:scale(10),height: scale(160),borderRadius:scale(9), backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.IntF}>
                    <View><Image source={props.imgIntF !== undefined ? {uri :props.imgIntF }:frente} style={{width:'100%', height:scale(60),borderTopLeftRadius:scale(9),borderTopRightRadius:scale(9)}}/></View>
                </TouchableOpacity>
                    <View><H5_5 color={'orange'}>  {i18n.t('extras.intF')}</H5_5></View>
                    <View style={{paddingLeft:scale(3)}}><H6>{i18n.t('extras.intFText')}</H6></View>
                </View>
                : <View/>}
            {props.ItsInteriorT === true ?
                <View style={{width: scale(85),marginRight:scale(10),height: scale(160),borderRadius:scale(9), backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.IntT}>
                    <View><Image source={props.imgIntT !== undefined ? {uri :props.imgIntT }:trasera} style={{width:'100%', height:scale(60),borderTopLeftRadius:scale(9),borderTopRightRadius:scale(9)}}/></View>
                </TouchableOpacity>
                    <View><H5_5 color={'orange'}>  {i18n.t('extras.IntT')}</H5_5></View>
                    <View style={{paddingLeft:scale(3)}}><H6>{i18n.t('extras.IntTText')}</H6></View>
                </View>
                : <View/>}
            
           
        </View>
        <View style={{flex:1, alignItems:'center', flexDirection:'row',marginBottom:scale(35),marginLeft:'25%',marginRight:'20%'}}>

                
        {props.ItsComb === true ?
                <View style={{width: scale(85),marginRight:scale(10),height: scale(160),borderRadius:scale(9), backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.comb}>
                    <View><Image source={props.imgCombustible !== undefined ? {uri :props.imgCombustible }:comb} style={{width:'100%', height:scale(60),borderTopLeftRadius:scale(9),borderTopRightRadius:scale(9)}}/></View>
                </TouchableOpacity>
                <MAInput
                                    containerStyle={{backgroundColor:'transparent',height:scale(27),width:scale(86)}}
                                    inputStyle={{color:'rgb(141,199,62)',fontSize:11}}
                                    underlineColorAndroid="rgb(141,199,62)"
                                    placeholder={''}
                                    
                                    disabled={true}
                                    keyboardType='number-pad'
                                    placeholderTextColor={"rgb(141,199,62)"}                        
                                    onChangeText={props.changeComb}
                                    value={i18n.t('extras.CombLabel')+':'+ props.Combustible}
                                />
                    <View><H5_5 color={'orange'}>  {i18n.t('extras.Comb')}</H5_5></View>
                    <View style={{paddingLeft:scale(3)}}><H6>{i18n.t('extras.CombText')}</H6></View>
                </View>: <View/>}
            

            {props.ItsOdo === true ?
                <View style={{width: scale(85),marginRight:scale(5),height: scale(160),borderRadius:scale(9), backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.odo}>
                    <View><Image source={props.imgOdometro !== undefined ? {uri :props.imgOdometro }:odometro} style={{width:'100%', height:scale(60),borderTopLeftRadius:scale(9),borderTopRightRadius:scale(9)}}/></View>
                </TouchableOpacity>
                <MAInput
                                    containerStyle={{backgroundColor:'transparent',height:scale(27),width:scale(86)}}
                                    inputStyle={{color:'rgb(141,199,62)',fontSize:11}}
                                    underlineColorAndroid="rgb(141,199,62)"
                                    placeholder={''}
                                    maxLength={9}
                                    disabled={true}
                                    keyboardType='number-pad'
                                    placeholderTextColor={"rgb(141,199,62)"}                        
                                    onChangeText={props.changeOdometro}
                                    value={props.Odometro +' '+ i18n.t('extras.KmLabel')}
                                />
                    <View><H5_5 color={'orange'}>  {i18n.t('extras.Odo')}</H5_5></View>
                    <View style={{paddingLeft:scale(3)}}><H6>{i18n.t('extras.OdoText')}</H6></View>
                </View>: <View/>}
            

        </View>
        {props.ItsContract === true ? 
        <View style={{flex:1, alignItems:'center', flexDirection:'row',marginBottom:scale(35),alignSelf: 'center'}}>
            
            <View style={{width: scale(85),marginRight:scale(5),height: scale(160),borderRadius:scale(9), backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.contrato}>
                    <View><Image source={props.imgContrato !== undefined ? {uri :props.imgContrato }:contrato} style={{width:'100%', height:scale(60),borderTopLeftRadius:scale(9),borderTopRightRadius:scale(9)}}/></View>
                </TouchableOpacity>
                <MAInput
                                    containerStyle={{backgroundColor:'transparent',height:scale(40),width:scale(86)}}
                                    inputStyle={{color:'rgb(141,199,62)',fontSize:11,textAlignVertical: 'top'}}
                                    underlineColorAndroid="rgb(141,199,62)"
                                    placeholder={''}
                                    numberOfLines={2}
                                    multiline={true}
                                    disabled={true}
                                    keyboardType='number-pad'
                                    placeholderTextColor={"rgb(141,199,62)"}                        
                                    onChangeText={props.InputContract}
                                    value={i18n.t('extras.LabelContract')+':\n'+ props.InputContract}
                                />
                    <View><H5_5 color={'orange'}>  {i18n.t('extras.Contract')}</H5_5></View>
                    <View style={{paddingLeft:scale(5)}}><H6>{i18n.t('extras.ContractText')}</H6></View>
            </View>
            {props.config !== undefined && props.config.cantidad === 2 || props.config !== undefined && props.config.cantidad === 3? 
            <View style={{width: scale(85),marginRight:scale(5),height: scale(160),borderRadius:scale(9), backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.contrato2}>
                    <View><Image source={props.imgContrato2 !== undefined ? {uri :props.imgContrato2 }:contrato} style={{width:'100%', height:scale(60),borderTopLeftRadius:scale(9),borderTopRightRadius:scale(9)}}/></View>
                </TouchableOpacity>
                    <View><H5_5 color={'orange'}>  {i18n.t('extras.Contract')}</H5_5></View>
                    <View style={{paddingLeft:scale(3)}}><H6>{i18n.t('extras.ContractText')}</H6></View>
            </View>
            : <View/>}
            {props.config !== undefined && props.config.cantidad === 3?
            <View style={{width: scale(85),marginRight:scale(5),height: scale(160),borderRadius:scale(9), backgroundColor: 'white'}}>
                <TouchableOpacity onPress={props.contrato3}>
                    <View><Image source={props.imgContrato3 !== undefined ? {uri :props.imgContrato3 }:contrato} style={{width:'100%', height:scale(60),borderTopLeftRadius:scale(9),borderTopRightRadius:scale(9)}}/></View>
                </TouchableOpacity>
                    <View><H5_5 color={'orange'}>  {i18n.t('extras.Contract')}</H5_5></View>
                    <View style={{paddingLeft:scale(3)}}><H6>{i18n.t('extras.ContractText')}</H6></View>
            </View> :<View/>}
        
        </View>: <View/>}
                {props.configDmg !== true ? 
                    [<View style={{flex:1, alignItems:'center', flexDirection:'row',marginBottom:scale(2),alignSelf: 'center'}}>
                    <H5_5 color={'rgb(11, 107, 4)'}>{i18n.t('extras.text')}</H5_5>
    </View>,<View style={{flex:1, alignItems:'center', flexDirection:'row',marginBottom:scale(75),alignSelf: 'center'}}><TouchableOpacity onPress={props.volver}>
                    <H5_5 style={{textDecorationLine: 'underline'}} color={'blue'}>{i18n.t('extras.here')}.</H5_5>
                    </TouchableOpacity></View>] : <View/>}
        

        <View style={{flex:1, alignItems:'center', flexDirection:'row',marginBottom:scale(85),marginLeft:scale(5)}}>
            <View style={{flexDirection:'column',paddingLeft:scale(11)}}>
            {props.Adicionales !== undefined ?
                <View>
                        <PrimaryButton
                            style={{borderRadius:scale(9), width:scale(120)}}
                            color={'rgb(12, 110, 77)'}
                            disabled={props.Adicionales.cantidad === props.AdicionalesCount ? true : false}
                            onPress={props.moreoptions}>
                            <H5 color='white'> {i18n.t('extras.more')}</H5>
                        </PrimaryButton>
                            <View style={{alignSelf: 'center'}}><H3 color={'rgb(11, 107, 4)'}>{props.AdicionalesCount}/{props.Adicionales.cantidad}</H3></View> 
                    </View>:
                   <View/> }
                </View>
                <PrimaryButton
                    style={{borderRadius:scale(9),width:scale(90)}}
                    color={'rgb(12, 110, 77)'}
                    onPress={props.save}>
                    <H5 color='white'> {i18n.t('extras.save')}</H5>
                </PrimaryButton>
    </View>
  </View>
);
const styles = StyleSheet.create({
    wrapper: {},
    slides: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor:'white'
    },
    flagsContainer:{
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop:scale(5),
        paddingRight:scale(10),
    },
    logoContainer:{
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:scale(-80)
        
    },
    logoContainerLogin:{
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:scale(-390)
        
    },
    userContainer:{
        flex:1,
        width: '100%', 
        height: '100%',
        alignItems:'center' ,
        paddingTop:scale(80),
        backgroundColor: 'rgb(141,199,62)',
        borderTopLeftRadius:scale(75),
         borderTopRightRadius:scale(75),
        
    },
    userContainerLogin:{
        flex:1,
        width: '100%', 
        height: '100%',
        alignItems:'center' ,
        paddingTop:scale(-40),
        marginTop:scale(-80),
        backgroundColor: 'rgb(141,199,62)',
        borderTopLeftRadius:scale(75),
         borderTopRightRadius:scale(75),
        
    },
    flags:{
        marginTop:scale(15), 
        width: scale(35),
        height: scale(25)
    },
    logo:{ 
        height:scale(100),
        resizeMode: 'contain'
    },
    logoLogin:{ 
        height:scale(100),
        resizeMode: 'contain'
    },
    touchable: {
        padding: scale(6),
        marginBottom:scale(30),
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrow: {
        alignSelf: 'center',
        fontSize: scale(36),
        color: Colors.white,
        marginLeft: scale(6)
    },
    photo:{
        width: scale(80),
        height: scale(80),
    }
});

export default Pictures;
