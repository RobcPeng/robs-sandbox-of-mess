/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootStackParamlist,
  RootStackParamListType,
} from 'src/navigation/navTypes';

const Homescreen = ({navigation}: RootStackParamListType<'Home'>) => {
  const [val, setVal] = useState<string | number>('');

  return (
    <View>
      <TextInput
        style={{backgroundColor: 'red', padding: '10%', borderRadius: 8}}
        onChange={vl => {
          setVal(vl.nativeEvent.text), console.log(vl);
        }}
      />
      <Text>{val}</Text>
      <Text>hi</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
