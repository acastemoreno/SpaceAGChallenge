import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

const MuestraScreen = ({route, navigation}) => {
  const {id} = route.params;

  const muestra = useSelector((state) =>
    state.muestras.find((muestraState) => {
      return muestraState.id === id;
    }),
  );

  return (
    <Image
      key={muestra.id}
      source={{uri: muestra.uri}}
      style={styles.preview}
    />
  );
};

export default MuestraScreen;
