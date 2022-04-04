import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';

export default function ListadoScreen(props) {
    const Item = ({ title }) => (
        <View style={{ ...styles.item, backgroundColor: props.Colors.secondaryColor, }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
        <SafeAreaView style={{...styles.container, backgroundColor:props.Colors.backgroundColor}}>
            <FlatList
                data={props.DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* marginTop: StatusBar.currentHeight || 0, */
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    title: {
        fontSize: 32,
    },
});

