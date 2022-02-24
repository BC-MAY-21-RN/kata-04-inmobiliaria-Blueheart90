import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorImage from 'react-native-vector-image';

const Feature = ({svgName, text}) => {
  const svgs = [
    {name: 'bed', path: require('../img/bed.svg')},
    {name: 'bath', path: require('../img/bath.svg')},
    {name: 'landSize', path: require('../img/landSize.svg')},
  ];
  const svgPath = svgs.find(svg => svg.name == svgName).path;

  return (
    <View style={styles.container}>
      <VectorImage style={styles.svg} source={svgPath} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  svg: {
    height: 20,
    marginRight: -5,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2D2F35',
    fontSize: 15,
  },
});
