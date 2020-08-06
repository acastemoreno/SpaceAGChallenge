import React from 'react';
import {Button, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {increment} from './muestrasSlice';

function MuestrasScreen() {
  const count = useSelector((state) => state.muestras.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}

export default MuestrasScreen;
