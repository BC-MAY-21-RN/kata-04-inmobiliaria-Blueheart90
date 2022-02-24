import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Inmueble from './src/components/Inmueble';
import inmuebles from './src/database/inmuebles';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={inmuebles}
        renderItem={({item}) => <Inmueble inmueble={item} />}
        keyExtractor={inmueble => inmueble.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});
