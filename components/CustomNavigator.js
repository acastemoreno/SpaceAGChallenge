import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar} from 'react-native-paper';

const {Navigator} = createStackNavigator();

const header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const CustomNavigator = ({initialRouteName, children}) => {
  return (
    <Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        header: header,
      }}>
      {children}
    </Navigator>
  );
};

export default CustomNavigator;
