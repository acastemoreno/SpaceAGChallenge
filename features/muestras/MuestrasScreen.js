import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {List, Button} from 'react-native-paper';

function MuestrasScreen({navigation}) {
  const muestras = useSelector((state) => state.muestras);

  const muestrasElements =
    muestras.length === 0
      ? null
      : muestras.map((muestra) => {
          return (
            <List.Item
              key={muestra.id}
              title={`Muestra ${muestra.id}`}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() =>
                navigation.navigate('MuestraDetail', {id: muestra.id})
              }
            />
          );
        });

  return (
    <View style={{flex: 1}}>
      <ScrollView>{muestrasElements}</ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          icon="plus"
          mode="contained"
          style={{
            height: 46,
            borderRadius: 23,
            justifyContent: 'center',
            marginBottom: 15,
          }}
          contentStyle={{
            height: 46,
            borderRadius: 23,
          }}
          onPress={() => navigation.navigate('Camera')}>
          Nueva Muestra
        </Button>
      </View>
    </View>
  );
}

export default MuestrasScreen;
