/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as StoreProvider} from 'react-redux';

import store from './app/store';
import MuestrasScreen from './features/muestras/MuestrasScreen';
import CameraScreen from './features/camera/CameraScreen';
import CustomNavigator from './components/CustomNavigator';
import MuestraScreen from './features/muestras/MuestraScreen';

const {Screen} = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4f4f4f',
  },
};

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
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
            <Screen
              name="MuestraDetail"
              component={MuestraScreen}
              options={({route}) => ({title: `Muestra ${route.params.id}`})}
            />
          </CustomNavigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
export default App;
