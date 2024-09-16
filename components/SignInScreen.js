import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleContinue = () => {
    // Simple validation to check if phone number is entered
    if (!phoneNumber) {
      alert('Please enter your phone number');
      return;
    }

    // Simulate sending OTP here. In a real app, you'd make an API call.
    console.log('Sending OTP to:', phoneNumber);
    
    // Navigate to SignUpScreen where user will enter OTP
    navigation.navigate('SignUpScreen', { phoneNumber }); 
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 10}
        >
          <Text style={styles.title}>Let’s verify your {'\n'} number</Text>
          <Text style={styles.subtitle}>We’ll send you an OTP</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone no"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <View style={styles.ellipseContainer}>
          <View style={styles.bigEllipse} />
          <View style={styles.pinkEllipse} />
          <View style={styles.smallEllipse} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',  // Make sure container takes the full width
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 19,
    color: '#888',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',  // Ensure the container takes the full width
    paddingHorizontal: 20,  // Add padding to the sides for spacing
  },
  input: {
    width: '100%',  // Make sure the input takes the full width of its container
    height: 60,     // Increase height for a larger input field
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    fontSize: 18,   // Larger font size for easier input
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '90%',  // Make sure the button takes full width
    backgroundColor: '#2E266E',  // Dark purple color
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 180,  // Adjusted to leave space between the button and the ellipses
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ellipseContainer: {
    position: 'absolute',
    bottom: -7,  // Fix ellipses to the bottom of the screen
    width: '100%',
    height: height * 0.1,  // Make sure ellipses take up only 30% of screen height
    zIndex: -5,  // Ensure ellipses are in the background
  },
  bigEllipse: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#2E78B7',  // Blue color for the big ellipse
    position: 'absolute',
    bottom: -30,
    left: -60,
  },
  pinkEllipse: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FF4081',  // Pink color
    position: 'absolute',
    bottom: 140,
    left: 80,
  },
  smallEllipse: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#3F2D7E',  // Dark purple color
    position: 'absolute',
    bottom: 80,
    left: 150,
  },
});
