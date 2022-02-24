import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feature from './Feature';

const HouseDetails = () => {
  return (
    <View style={styles.container}>
      <Feature svgName="bed" text="3" />
      <Feature svgName="bath" text="2" />
      <Feature svgName="landSize" text="54 m²" />
    </View>
  );
};

export default HouseDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: -10,
  },
});
