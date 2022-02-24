import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import VectorImage from 'react-native-vector-image';
import Location from './Location';
import HouseDetails from './HouseDetails';
import Price from './Price';

const inmueble = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={require('../img/inmueble.png')} />
          <View style={styles.rating}>
            <VectorImage
              style={styles.starSvg}
              source={require('../img/star.svg')}
            />
            <Text style={styles.score}>3.4</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>The Willows</Text>
          <Location />
          <HouseDetails />
          <Price pricePerMonth="440" />
        </View>
      </View>
      <View style={styles.favHeart}>
        <VectorImage
          style={styles.circleSvg}
          source={require('../img/favHeart.svg')}
        />
        <VectorImage
          style={styles.heartSvg}
          source={require('../img/heart.svg')}
        />
      </View>
    </View>
  );
};

export default inmueble;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  rating: {
    position: 'absolute',
    bottom: 15,
    left: '25%',
    flexDirection: 'row',
    backgroundColor: '#FBEDB7',
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  score: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 5,
    color: '#2D2F35',
    fontSize: 15,
  },
  favHeart: {
    backgroundColor: 'blue',
    position: 'absolute',
    right: 0,
    bottom: 15,
  },
  circleSvg: {
    position: 'absolute',
    height: 32,
    right: 0,
    bottom: 0,
  },
  starSvg: {
    height: 15,
  },
  heartSvg: {
    height: 16,
    position: 'absolute',
    right: 15,
    bottom: 7,
  },
  img: {
    borderRadius: 15,
    width: 120,
    height: 126.32,
  },
  info: {
    paddingLeft: 15,
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: '#F5FDFF',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#151525',
  },
});
