import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import FullWidthImage from 'react-native-fullwidth-image';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'darkgray',
  },

  preview: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  title: {
    margin: 8,
  },

  map: {
    height: 240,
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
    <ScrollView style={styles.view}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: muestra.latitude,
          longitude: muestra.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.00521,
        }}
        pitchEnabled={false}
        rotateEnabled={false}
        zoomEnabled={true}
        scrollEnabled={true}>
        <Marker
          coordinate={{
            latitude: muestra.latitude,
            longitude: muestra.longitude,
          }}
        />
      </MapView>
      <View style={styles.preview}>
        <Text style={styles.title}>Foto</Text>
        <FullWidthImage key={muestra.id} source={{uri: muestra.uri}} />
      </View>
    </ScrollView>
  );
};

export default MuestraScreen;
