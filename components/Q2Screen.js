import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook

const Q2Screen = () => {
  const [selectedCollege, setSelectedCollege] = useState('Reva U');
  const navigation = useNavigation();  // Initialize navigation

  // Navigate to Q3Screen when the arrow button is pressed
  const handleNextScreen = () => {
    navigation.navigate('Q3Screen');
  };

  return (
    <View style={styles.container}>
      {/* Circular Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/images/yellow-stadium-with-integrated-living-blocks 2.png')}  // Replace with your image path
          style={styles.studentImage}
        />

        {/* Pink and blue ellipses */}
        <View style={styles.pinkEllipse}></View>
        <View style={styles.blueEllipse}></View>
      </View>

      {/* Dropdown for college selection */}
      <Text style={styles.labelText}>Select your college</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCollege}
          style={[styles.picker, Platform.OS === 'ios' && styles.pickerIOS]} // Adding specific styles for iOS
          onValueChange={(itemValue) => setSelectedCollege(itemValue)}
        >
          <Picker.Item label="Reva U" value="Reva U" />
          <Picker.Item label="Reva university" value="Reva university" />
          <Picker.Item label="Reva college" value="Reva college" />
        </Picker>
        
        {/* Arrow Button to navigate to the next screen */}
        <TouchableOpacity style={styles.arrowButton} onPress={handleNextScreen}>
          <Text style={styles.arrowText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30, // Space between image and dropdown
  },
  studentImage: {
    width: 270,
    height: 270,
    borderRadius: 135, 
    top: -90, // Adjusted to bring it higher
    left: -90,// Circular image
    borderWidth: 5,
    borderColor: '#F4B740', // Outer border color
  },
  pinkEllipse: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF4A8D', // Pink color
    bottom: 50,
    right: 20,
  },
  blueEllipse: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2', // Blue color
    top: -150,
    left: 180,
  },
  labelText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4A3AFF', // Border color for picker
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#E6E6FA', // Light background for picker
    width: '80%', // Adjust width for responsiveness
  },
  picker: {
    flex: 1,
    height: Platform.OS === 'ios' ? 20 : 10, // Adjust height specifically for iOS
    color: '#4A3AFF',
  },
  pickerIOS: {
    height: 20 , // Ensures the iOS picker has enough height
  },
  arrowButton: {
    padding: 5, // Increase padding for larger button
    backgroundColor: '#4A3AFF',
    borderRadius: 30, // Increase border radius for larger button
    marginLeft: 5, // Add margin between picker and button
  },
  arrowText: {
    color: '#fff',
    fontSize: 40, // Increase font size for larger arrow
    fontWeight: 'bold',
  },
});

export default Q2Screen;
