import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import store from './store';
import { Root as NBRoot } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './navigation/NavigationService';
import { HomeScreens } from './navigation/HomeNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow
        }
      }}>
      <Tab.Screen name="Calendary" options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image source={require('../assets/images/personIconMenu.png')} resizeMode='contain'
              style={{ width: 25, height: 25, alignItems: 'center', justifyContent: 'center' }}
            />
            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12, alignItems: 'center' }}>Calendario</Text>
          </View>
        ),
      }} component={HomeScreens.Calendary} />
      
      <Tab.Screen name="My Skills
      " options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('../assets/images/iconPhoneMenu.png')} resizeMode='contain'
                style={{ width: 25, height: 25 }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Materias</Text>
            </View>
          ),
        }} component={HomeScreens.Listado} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <NBRoot>
            <StatusBar hidden={false} />
            <NavigationContainer options={{ headerShown: false }} ref={navigationRef}>
              <MyTabs />
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
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});