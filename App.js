/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as StoreProvider} from 'react-redux';
import {Appbar} from 'react-native-paper';

import store from './app/store';
import MuestrasScreen from './features/muestras/MuestrasScreen';
import CameraScreen from './features/camera/CameraScreen';
import CustomNavigator from './components/CustomNavigator';

const {Screen} = createStackNavigator();

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <CustomNavigator initialRouteName="Muestras">
            <Screen
              name="Muestras"
              component={MuestrasScreen}
              options={{title: 'Muestras'}}
            />
            <Screen
              name="Camera"
              component={CameraScreen}
              options={{title: 'Nueva Muestra'}}
            />
          </CustomNavigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
export default App;
