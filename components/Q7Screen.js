import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const AccommodationScreen = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle navigation to Q8Screen
  const navigateToThankYouScreen = () => {
    navigation.navigate('ThankYou'); // Replace 'Q8Screen' with the actual name of the next screen
  };

  return (
    <View style={styles.container}>
      {/* Main Circular Image with Dual Border */}
      <View style={styles.imageCircleOuter}>
        <View style={styles.imageCircleInner}>
          <Image source={require('../assets/images/curious-eastern-couple-looking-copy-space-touching-chin (1) 1.png')} style={styles.mainImage} />
        </View>
      </View>

      {/* Pink and Blue Circles */}
      <View style={styles.pinkCircle} />
      <View style={styles.blueCircle} />

      {/* Text for the Question */}
      <Text style={styles.questionText}>What type of accommodation do {'\n'} you prefer?</Text>

      {/* Accommodation Option Buttons */}
      <TouchableOpacity style={styles.optionButton} onPress={navigateToThankYouScreen}>
        <Text style={styles.buttonText}>Boy’s living space</Text>
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={navigateToThankYouScreen}>
        <Text style={styles.buttonText}>Girls’ living space</Text>
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={navigateToThankYouScreen}>
        <Text style={styles.buttonText}>Co-living space</Text>
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>

      {/* Status bar for the device */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  imageCircleOuter: {
    width: 320,
    height: 320,
    left:50,
    top:-50,
    borderRadius: 160, // Outer orange border
    borderWidth: 5,
    borderColor: '#FFB74D', // Orange border color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  imageCircleInner: {
    width: 300,
    height: 300,
    borderRadius: 150, // Inner white border
    borderWidth: 1,
    borderColor: '#fff', // White border color
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensures image is contained within the circle
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pinkCircle: {
    position: 'absolute',
    top: 60,
    left: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E149A0',
  },
  blueCircle: {
    position: 'absolute',
    bottom: 440,
    left: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2D9CDB',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    borderRadius: 10,
    borderColor: '#3E278D',
    borderWidth: 1,
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#3E278D',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  arrowText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AccommodationScreen;
