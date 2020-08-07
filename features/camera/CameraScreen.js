import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useDispatch} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';

import {addMuestra} from '../muestras/muestrasSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const CameraScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [showCamera, SetUseCamera] = useState(false);

  useEffect(() => {
    Geolocation.setRNConfiguration({});

    const requestPermission = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        SetUseCamera(true);
      } else {
        navigation.navigate('Muestras');
      }
    };

    requestPermission();
  }, []);

  if (!showCamera) {
    return null;
  }

  const takePicture = async function (camera) {
    const good = async ({coords}) => {
      const options = {quality: 0.5, base64: true};
      const dataCamera = await camera.takePictureAsync(options);
      dispatch(
        addMuestra({
          uri: dataCamera.uri,
          latitude: coords.latitude,
          longitude: coords.longitude,
        }),
      );
      navigation.navigate('Muestras');
    };

    const error = (error) => {
      console.log(error);
      navigation.navigate('Muestras');
    };

    const option = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 5000,
    };

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Required',
        message: 'This App needs to Access your location',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(good, error, option);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}>
        {({camera, status}) => {
          if (status !== 'READY') {
            return null;
          }
          return (
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

export default CameraScreen;
