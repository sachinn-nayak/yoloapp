import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ThankYouScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {/* You can replace this with the actual image file */}
        <Image source={require('../assets/images/logo.png')} style={styles.mainImage} />
        </View>
      <View style={styles.middleSection}>
        <Text style={styles.title}>Thank you!</Text>
        <Text style={styles.subtitle}>
          A personalized journey is about to {'\n'} unfold for you!
        </Text>
      </View>
      <View style={styles.bottomSection}>
        {/* Circles on the bottom section */}
        <View style={styles.circleBigBlue} />
        <View style={styles.circleMediumPink} />
        <View style={styles.circleSmallPink} />
        <View style={styles.circleSmallBlue} />
        <View style={styles.circleExtraSmallPink} />
        <View style={styles.circleExtraSmallBlue} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSection: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 90, // Adjust size accordingly
    height: 45,
    resizeMode: 'contain',
  },
  middleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 500,
  },
  subtitle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#666',
    top:-500,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  circleBigBlue: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#418DCF', // Blue circle color
    position: 'absolute',
    bottom: 100,
    right: -100,
  },
  circleMediumPink: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#418DCF', // Pink circle color
    position: 'absolute',
    bottom: -70,
    left: -70,
  },
  circleSmallPink: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F85E8E', // Pink circle colory
    position: 'absolute',
    bottom: 180,
    right: 60,
  },
  circleSmallBlue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00008B', // Blue circle color
    position: 'absolute',
    bottom: -10,
    left: 120,
  },
  circleExtraSmallPink: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F85E8E', // Pink circle color
    position: 'absolute',
    bottom: 60,
    left: 70,
  },
  circleExtraSmallBlue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00008B', // Blue circle color
    position: 'absolute',
    bottom: 270,
    right: 10,
  },
});