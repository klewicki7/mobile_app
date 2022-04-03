import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Container, Content } from 'native-base';
import { H3 } from '../components/MAText';
import i18n from '../utils/i18n';
import scale from '../utils/scaling/scale';
import Listado from '../components/Listado'
import Colors from '../constants/Colors';


export default function ListadoScreen(props) {

    useEffect(() => {
        props.list()
    }, [])

    function renderComponent(datos) {
        return (
            <View>
                <Listado
                    data={datos}
                >
                </Listado>
            </View>
        );
    }
    const renderList = () => {
        return (
            props.datos.map((datos) =>
                renderComponent(datos))
        )
    }

    return (
        <Container>
            <Content>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <H3 color={'#787878'}>{i18n.t('listado.titulo')}</H3>
                    </View>
                </View>
                <View style={styles.content}>
                    {renderList()}
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

