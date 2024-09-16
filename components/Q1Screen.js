import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook

const Q1Screen = () => {
  const navigation = useNavigation();  // Initialize navigation

  // Navigate to Q3Screen
  const navigateToQ2 = () => {
    navigation.navigate('Q2Screen');
  };

  return (
    <View style={styles.container}>
      {/* Header text */}
      <Text style={styles.headerText}>Help us get to{'\n'}know you better</Text>

      {/* Images and Circles */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/images/front-view-female-student-wearing-backpack-holding-files-blue-wall 2.png')} // Replace with your student image path
          style={styles.studentImage}
        />
        <Image
          source={require('../assets/images/indian-man-black-suit-by-window-modern-building 2.png')} // Replace with your employee image path
          style={styles.employeeImage}
        />

        {/* Pink and blue ellipses */}
        <View style={styles.pinkEllipse}></View>
        <View style={styles.blueEllipse}></View>
      </View>

      {/* Question */}
      <Text style={styles.questionText}>Are you Student / Employee?</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={navigateToQ2}>
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToQ2}>
        <Text style={styles.buttonText}>Employee</Text>
      </TouchableOpacity>

      {/* Skip option */}
      <TouchableOpacity onPress={navigateToQ2}>
        <Text style={styles.skipText}>{`<< Skip >>`}</Text>
      </TouchableOpacity>
      <Text style={styles.doItLaterText}>Do it later</Text>
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
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 80,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 270, // Adjusted height for better spacing
    marginBottom: 25,
  },
  studentImage: {
    width: 180, // Reduced width for better clarity
    height: 180, // Reduced height to fit well in the design
    borderRadius: 90, // Circular image
    position: 'absolute',
    top: -30, // Adjusted to bring it higher
    left: -20, // Moved slightly left to balance the layout
  },
  employeeImage: {
    width: 180, // Reduced width for better clarity
    height: 180, // Reduced height to fit well in the design
    borderRadius: 90, // Circular image
    position: 'absolute',
    top: 60, // Adjusted to align better with the student image
    right: -20, // Moved slightly right to balance the layout
  },
  pinkEllipse: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF4A8D', // Pink color
    top: 180, // Adjusted for better alignment with student image
    left: 70,
  },
  blueEllipse: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2', // Blue color
    top: -20, // Positioned higher for alignment with employee image
    right: 90,
  },
  questionText: {
    fontSize: 18,
    color: '#000',
    marginTop: 30, // Adjusted to move below images
    marginBottom: 10, // Add a little space between the question and the buttons
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4A3AFF',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%', // Ensure buttons are centered and responsive
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  skipText: {
    fontSize: 20,
    color: '#6e6e6e',
    marginTop: 30,
    fontWeight: 'bold',
  },
  doItLaterText: {
    fontSize: 15,
    color: '#6e6e6e',
  },
});

export default Q1Screen;
