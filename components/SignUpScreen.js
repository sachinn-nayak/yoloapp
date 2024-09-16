import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SignUpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params || { phoneNumber: '' };

  const handleInputChange = (value, index) => {
    let otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);
  };

  const handleConfirm = () => {
    const otpString = otp.join('');
    console.log('Verifying OTP:', otpString, 'for phone:', phoneNumber);
    
    // Assuming OTP verification is successful
    navigation.navigate('VerifiedScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>We have sent the verification code to your phone number</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  backText: {
    fontSize: 54,
    color: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '80%', // Adjust width as per requirement
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#F8F8F8',
  },
  confirmButton: {
    width: '80%',
    backgroundColor: '#2E266E',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 40,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
