import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Colors from '../constants/Colors';
import {HomeScreens} from "./HomeNavigator";
import {MADrawer} from "../components/MADrawer";
import {H5} from '../components/MAText';

const WIDTH = Dimensions.get('window').width;

const HomeStack = createStackNavigator(
    {
        ...HomeScreens,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Initial',
        contentOptions: {
            activeTintColor: Colors.secondaryColor,
        },
    }
);

const drawerConfig = {
    drawerWidth: WIDTH * 0.60,
    initialRouteName: 'Home',
    contentComponent: MADrawer,
    style: {
        backgroundColor: Colors.white,
    }
};

const styles = StyleSheet.create({
    drawerItem: {
        height: 50.1,
        marginLeft: 1.1,
        justifyContent: 'center',
    }
});

export const drawerNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeStack, navigationOptions: {
            drawerLabel: () => (
                <View style={styles.drawerItem}>
                    <H5 color={Colors.primaryColor}>Inicio</H5>
                </View>
            )
        }},
        
    },
    drawerConfig
);

