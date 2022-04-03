import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { H3, H5 } from '../components/MAText';
import scale from '../utils/scaling/scale';
import Colors from '../constants/Colors';
//Se importa la img desde assets/images
import MpsLogo from '../../assets/images/mps.png'


export default function InitialScreen(props) {
    return (
        <Container>
            <Content>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <H3 color={'#787878'}>Mobile Structure App</H3>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={MpsLogo} style={styles.logo} />
                    <View style={styles.navigation}>
                        <View style={{ paddingBottom: scale(10) }}>
                            <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate('Listado')}/* Navegar entre pantallas */>
                                <H5 color={Colors.lighterBlue}>Ir al listado</H5>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate('Registro')}/* Navegar entre pantallas */>
                            <H5 color={Colors.lighterBlue}>Ir al Registro</H5>
                        </TouchableOpacity>
                    </View>
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
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigation: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: scale(180),
    },
    buttons: {
        width: scale(150),
        height: scale(50),
        borderRadius: 11,
        borderWidth: 1,
        borderColor: Colors.lighterBlue,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logo: {
        height: scale(100),
        resizeMode: 'contain'
    },

});

