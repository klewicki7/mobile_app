import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import { H3, H5 } from '../components/MAText';
import scale from '../utils/scaling/scale';
import Colors from '../constants/Colors';


export default function OtherScreen(props) {

    return (
        <Container>
            <Content>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <H3 color={'#787878'}>Segunda Pantalla</H3>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.navigation}>
                        <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate('Initial')}/* Navegar entre pantallas */>
                            <H5 color={Colors.lighterBlue}>Ir a la Primer Pantalla</H5>
                        </TouchableOpacity>
                    </View>
                </View>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    header: {
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
        height: Dimensions.get('window').height,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
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
        flexDirection: 'row',
    },

});
