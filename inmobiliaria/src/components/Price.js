import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Price = ({pricePerMonth}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>${pricePerMonth}/m</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  price: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2D2F35',
    fontSize: 21.25,
  },
  container: {
    marginTop: 3,
  },
});
