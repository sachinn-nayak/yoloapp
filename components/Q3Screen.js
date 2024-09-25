import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Q3Screen = () => {
  const [selectedLocation, setSelectedLocation] = useState('Bengal');
  const navigation = useNavigation();

  // Handle navigation to Q4Screen and pass selected location
  const handleNextScreen = () => {
    navigation.navigate('Q4Screen', { location: selectedLocation }); // Pass the selected location to Q4Screen
  };

  return (
    <View style={styles.container}>
      {/* Pink and blue ellipses */}
      <View style={styles.ellipseContainer}>
        <View style={styles.pinkEllipse}></View>
        <View style={styles.blueEllipse}></View>
      </View>

      {/* Image container for Vidhana Soudha */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/vidhana-soudha-bangalore 1.png')} style={styles.image} />
      </View>

      {/* Question label */}
      <Text style={styles.textLabel}>Where are you from?</Text>

      {/* Picker with icon */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLocation}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
        >
          <Picker.Item label="Bengal" value="Bengal" />
          <Picker.Item label="Delhi" value="Delhi" />
          <Picker.Item label="Bangalore" value="Bangalore" />
        </Picker>
        <TouchableOpacity onPress={handleNextScreen}>
          <Ionicons name="arrow-forward" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Location text */}
      <Text style={styles.locationText}>Bengaluru, Karnataka 560</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ellipseContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  pinkEllipse: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#E149A0',
    borderRadius: 50,
    top: 60,
    left: 70,
  },
  blueEllipse: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#4193E1',
    borderRadius: 20,
    top: 400,
    right: 330,
  },
  imageContainer: {
    position: 'absolute',
    top: 160,
    right: -30,
    width: 300,
    height: 300,
    borderRadius: 200,
    overflow: 'hidden',
    borderWidth: 8, // Adds the border thickness
    borderColor: '#F9C646', // Color similar to the image's border color
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 300, // Increases margin to push label down
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E278D',
    borderRadius: 10,
    paddingHorizontal: 0,
    paddingVertical: 5,
    marginBottom: 20,
    width: 200,
  },
  picker: {
    height: 50,
    width: 150,
    color: 'white',
  },
  icon: {
    marginLeft: 10,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10, // Increases margin to push location text down
  },
});

export default Q3Screen;
