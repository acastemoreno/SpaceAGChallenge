/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Muestras"
        onPress={() => navigation.navigate('Muestras')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const {Navigator, Screen} = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Muestras">
        <Screen
          name="Muestras"
          component={HomeScreen}
          options={{title: 'Muestras'}}
        />
        <Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Nueva Muestra'}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
export default App;
