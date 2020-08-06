/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import store from './app/store';
import MuestrasScreen from './features/muestras/MuestrasScreen';
import CameraScreen from './features/camera/CameraScreen';

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button
//         title="Go to Muestras"
//         onPress={() => navigation.navigate('Muestras')}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

const {Navigator, Screen} = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName="Muestras">
          <Screen
            name="Muestras"
            component={MuestrasScreen}
            options={{title: 'Muestras'}}
          />
          <Screen
            name="Camera"
            component={CameraScreen}
            options={{title: 'Camera'}}
          />
          {/* <Screen
            name="Details"
            component={DetailsScreen}
            options={{title: 'Nueva Muestra'}}
          /> */}
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
