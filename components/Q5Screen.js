import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const Q5Screen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Kannada");
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle navigation to Q6Screen
  const navigateToQ6Screen = () => {
    navigation.navigate('Q6Screen'); // Replace 'Q6Screen' with the actual name of the next screen
  };

  return (
    <View style={styles.container}>
      {/* Top Circle */}
      <View style={styles.topCircle} />
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/group-indian-people 2.png')} style={styles.image} />
      </View>
      {/* Bottom Circle */}
      <View style={styles.bottomCircle} />

      {/* Preferred Language Text */}
      <Text style={styles.text}>What is your preferred language?</Text>

      {/* Language Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="Kannada" value="Kannada" />
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Hindi" value="Hindi" />
          {/* Add more languages as needed */}
        </Picker>

        {/* Arrow Button within Picker */}
        <TouchableOpacity style={styles.pickerButton} onPress={navigateToQ6Screen}>
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Status bar for the device */}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    borderRadius: 175,
    borderWidth: 5,
    borderColor: '#F2C94C',
    overflow: 'hidden',
    width: 350,
    top: -20,
    right: 70,
    height: 350,
    marginBottom: 70,
  },
  image: {
    width: '100%',
    height: '100%',
    
    resizeMode: 'cover',
  },
  topCircle: {
    position: 'absolute',
    top: 100,
    right: 30,
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#2D9CDB',
  },
  bottomCircle: {
    position: 'absolute',
    bottom: 340,
    left: 270,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E149A0', // Pink color for the bottom circle
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    borderRadius: 25,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#3E278D', // Dark background for picker
    paddingRight: 10,
  },
  picker: {
    flex: 1,
    height: 50,
    color: '#fff', // White color for selected text
  },
  pickerButton: {
    backgroundColor: '#3E278D', // Pink color for the button
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 65,
  },
  buttonText: {
    color: '#fff',
    fontSize: 29,
    fontWeight: 'bold',
  },
});

export default Q5Screen;
