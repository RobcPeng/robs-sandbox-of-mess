import React, {useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';

import {RootStackParamListType} from '../navigation/navTypes';

export const Homescreen = ({navigation}: RootStackParamListType<'Home'>) => {
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
