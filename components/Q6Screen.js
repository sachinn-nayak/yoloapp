import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const HobbiesScreen = () => {
  const [hobbies, setHobbies] = useState("Western music");
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle navigation to Q6Screen
  const navigateToQ7Screen = () => {
    navigation.navigate('Q7Screen'); // Replace 'Q6Screen' with the actual name of the next screen
  };

  return (
    <View style={styles.container}>
      {/* Top Circle */}
      <View style={styles.topCircle}>
        <Image source={require('../assets/images/happy-man-outdoors-jumping-up 1.png')} style={styles.topImage} />
      </View>

      {/* Bottom Circle */}
      <View style={styles.bottomCircle}>
        <Image source={require('../assets/images/medium-shot-brunette-woman-armchair 1.png')} style={styles.bottomImage} />
      </View>

      {/* Pink and Blue Circles */}
      <View style={styles.pinkCircle} />
      <View style={styles.blueCircle} />

      {/* Hobbies Text */}
      <Text style={styles.text}>What is your Hobby?</Text>

      {/* Hobbies Input and Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setHobbies}
          value={hobbies}
          placeholder="Enter your hobbies"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.inputButton} onPress={navigateToQ7Screen}>
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Display Hobby */}
      <Text style={styles.displayHobby}>{hobbies}</Text>

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
  },
  topCircle: {
    position: 'absolute',
    top: 60,
    right: -15, // Move the top image a bit to the right
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: 'hidden',
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottomCircle: {
    position: 'absolute',
    top: 300, // Adjusted the top value to fit better with the new alignment
    right: 210, // Move the bottom image a bit to the right
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: 'hidden',
  },
  bottomImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pinkCircle: {
    position: 'absolute',
    top: 370,
    right: 90,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E149A0',
  },
  blueCircle: {
    position: 'absolute',
    top: 170,
    left: 60,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2D9CDB',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 0,
    backgroundColor: '#3E278D',
    paddingRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    color: '#fff',
    paddingLeft: 10,
  },
  inputButton: {
    // backgroundColor: '#3E278D', // Pink color for the button
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    top:-6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  displayHobby: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 10,
    marginBottom:-400,
  },
});

export default HobbiesScreen;