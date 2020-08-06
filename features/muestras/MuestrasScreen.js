import React from 'react';
import {Button, View} from 'react-native';
import {useSelector} from 'react-redux';
import {List} from 'react-native-paper';

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
    <View>
      {muestrasElements}
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}

export default MuestrasScreen;
