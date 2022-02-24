import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feature from './Feature';

const HouseDetails = ({details}) => {
  return (
    <View style={styles.container}>
      <Feature svgName="bed" text={details.beds} />
      <Feature svgName="bath" text={details.baths} />
      <Feature svgName="landSize" text={details.landSize} />
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
