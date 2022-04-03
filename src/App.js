import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, StatusBar, useEffect } from 'react-native';
import store from './store';
import { Root as NBRoot } from 'native-base';
import MainAppNavigator from './navigation/index';
import NavigationService from './navigation/NavigationService';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import Orientation from 'react-native-orientation-locker'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators, HeaderBackButton } from '@react-navigation/stack';
import { navigationRef } from './navigation/NavigationService';
import { HomeScreens } from './navigation/HomeNavigator';

const Stack = createStackNavigator();

export default function App() {
  /* componentDidMount() {
    Orientation.lockToPortrait()
    console.disableYellowBox = true
  } */
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <NBRoot>
              <StatusBar hidden={false} />
              <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Initial" component={HomeScreens.Initial}
                  />
                  <Stack.Screen
                    name="Listado" component={HomeScreens.Listado}
                  />
                  <Stack.Screen
                    name="Registro" component={HomeScreens.Registro}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </NBRoot>
          </View>
        </PersistGate>
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'VWText',
  },
});