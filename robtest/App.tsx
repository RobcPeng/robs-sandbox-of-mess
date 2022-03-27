/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamlist} from './src/navigation/navTypes';
import {Homescreen} from './src/Screens/HomeScreen';
import {Settings} from './src/screens/Settings';
import RnChartKitSandboxScreen from './src/Screens/RnChartKitSandbox';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamlist>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{title: 'Overall'}}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Settings'}}
        />
        <Stack.Screen name="RnChartKit" component={RnChartKitSandboxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
