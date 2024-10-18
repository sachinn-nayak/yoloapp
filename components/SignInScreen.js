import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^[0-9]{10,}$/; // Regular expression to check if the phone number is at least 10 digits and contains only numbers
    return phoneNumberPattern.test(number);
  };

  const handleContinue = () => {
    // Check if the phone number is entered and valid
    if (!phoneNumber) {
      alert('Please enter your phone number');
      return;
    }
    
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number with at least 10 digits');
      return;
    }

    // Simulate sending OTP here. In a real app, you'd make an API call.
    console.log('Sending OTP to:', phoneNumber);
    
    // Navigate to SignUpScreen where the user will enter OTP
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
              maxLength={15} // Limiting to 15 characters (e.g., country codes can be included)
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
    width: '100%',
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
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 60,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '90%',
    backgroundColor: '#2E266E',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 180,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ellipseContainer: {
    position: 'absolute',
    bottom: -7,
    width: '100%',
    height: height * 0.1,
    zIndex: -5,
  },
  bigEllipse: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#2E78B7',
    position: 'absolute',
    bottom: -30,
    left: -60,
  },
  pinkEllipse: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FF4081',
    position: 'absolute',
    bottom: 140,
    left: 80,
  },
  smallEllipse: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#3F2D7E',
    position: 'absolute',
    bottom: 80,
    left: 150,
  },
});
