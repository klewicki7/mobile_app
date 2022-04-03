import React,{useState} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { H3, H5 } from '../components/MAText';
import scale from '../utils/scaling/scale';
import MAInput from '../components/MAInput'
import Colors from '../constants/Colors';
import GeneralStyles from '../constants/styles/general';


export default function RegistroScreen (props){
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
        return (
            <Container>
                <Content>
                    <View style={styles.header}>
                        <View style={styles.title}>
                            <H3 color={'#787878'}>Registro</H3>
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingTop: scale(20), alignItems: 'center', paddingTop: scale(180) }}>
                        <View style={{ flexDirection: 'row'}}>
                            <View style={{ flexDirection: 'column', alignItems:'center' ,paddingHorizontal:scale(10)}}>
                                <H5>Nombre</H5>
                                <MAInput
                                    containerStyle={styles.inputNomApe}
                                    autoFocus={true}
                                    inputStyle={{ paddingLeft: scale(15) }}
                                    notLastInput={true}
                                    placeholderTextColor={GeneralStyles.input.color}
                                    onChangeText={(nombre) => setNombre(nombre)}
                                    value={nombre}
                                />
                            </View>
                            <View style={{ flexDirection: 'column' , alignItems:'center',paddingHorizontal:scale(10) }}>
                                <H5>Apellido</H5>
                                <MAInput
                                    containerStyle={styles.inputNomApe}
                                    inputStyle={{ paddingLeft: scale(15) }}
                                    notLastInput={true}
                                    placeholderTextColor={GeneralStyles.input.color}
                                    onChangeText={(apellido) => setApellido(apellido)}
                                    value={apellido}
                                />
                            </View>
                        </View>
                        
                    </View>
                    <View style={{ flex: 1, paddingTop: scale(20), alignItems: 'center' }}>
                        {/* Podemos llamar al prop que definimos en el Container de la siguiente forma: this.props.X() */}
                        <TouchableOpacity style={styles.buttons} onPress={() => props.insertRequest(nombre,apellido)}>
                            <H5 color={Colors.black}>Registrar</H5>
                        </TouchableOpacity>
                    </View>

                </Content>
            </Container>
        );
    }

const styles = StyleSheet.create({
    header: {
        //flexbox para react native: https://reactnative.dev/docs/flexbox
        flex: 1,
        height: scale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    title: {
        flex: 12,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navigation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        width: scale(220),
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: Colors.lighterBlue,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputNomApe: {
        width: scale(130),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: Colors.lighterBlue,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttons: {
        width: scale(90),
        height: scale(30),
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

});