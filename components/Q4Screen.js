import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook

const Q4Screen = () => {
  const navigation = useNavigation();  // Initialize navigation

  // Function to handle navigation to Q5Screen
  const navigateToQ5Screen = () => {
    navigation.navigate('Q5Screen');  // Replace 'Q5Screen' with the actual name of the next screen
  };

  return (
    <View style={styles.container}>
      {/* Blue and pink ellipses */}
      <View style={styles.blueEllipse}></View>
      <View style={styles.pinkEllipse}></View>

      {/* Food images */}
      <View style={styles.imageContainerTopRight}>
        <Image source={require('../assets/images/indian-delicious-food-view.png')} style={styles.foodImage} />
      </View>
      <View style={styles.imageContainerBottomLeft}>
        <Image source={require('../assets/images/healthy-meal-with-beef-rice-vegetables-generated-by-ai.png')} style={styles.foodImage} />
      </View>

      {/* Question label */}
      <Text style={styles.textLabel}>Your Food Preference?</Text>

      {/* Buttons for food choices */}
      <TouchableOpacity style={styles.button} onPress={navigateToQ5Screen}>
        <Text style={styles.buttonText}>Veg</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToQ5Screen}>
        <Text style={styles.buttonText}>Non-veg</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  blueEllipse: {
    width: 50,
    height: 50,
    backgroundColor: '#4193E1',
    borderRadius: 35,
    position: 'absolute',
    bottom: 450,
    left: 70,
  },
  pinkEllipse: {
    width: 80,
    height: 80,
    backgroundColor: '#E149A0',
    borderRadius: 40,
    position: 'absolute',
    top: 200,
    right: 60,
  },
  imageContainerTopRight: {
    position: 'absolute',
    top: 300, // Position slightly lower from the top
    right: -30, // Position to the right side
    width: 280,
    height: 280,
    borderRadius: 140, // Circle shape
    overflow: 'hidden', // Ensure the image stays within the border 
  },
  imageContainerBottomLeft: {
    position: 'absolute',
    bottom: 540, // Position slightly above the bottom
    left: -30, // Position to the left side
    width: 280,
    height: 280,
    borderRadius: 140, // Circle shape
    overflow: 'hidden',
  },
  foodImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 500, // Adjusted for better alignment
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3E278D',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Q4Screen;
