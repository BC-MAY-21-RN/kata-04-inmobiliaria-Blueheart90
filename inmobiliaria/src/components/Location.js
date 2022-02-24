import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorImage from 'react-native-vector-image';

const Location = ({address}) => {
  return (
    <View style={styles.container}>
      <VectorImage style={styles.svg} source={require('../img/location.svg')} />
      <Text style={styles.locationText}>{address}</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  locationText: {
    fontFamily: 'Poppins-Regular',
    color: '#737373',
    marginLeft: 5,
  },
  svg: {
    height: 20,
    marginRight: -5,
  },
  container: {
    marginBottom: 5,
    flexDirection: 'row',
    marginLeft: -5,
  },
});
