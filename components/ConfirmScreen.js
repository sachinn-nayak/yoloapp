import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook

const ConfirmScreen = () => {
  const navigation = useNavigation();  // Initialize navigation

  // Automatically navigate to Q1Screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Q1Screen');
    }, 3000);

    return () => clearTimeout(timer);  // Cleanup the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
       <Text style={styles.titleFirst}>Thank you</Text>
      {/* The Verified Icon */}
      <Image
        source={require('../assets/images/Confirm.png')}  // Ensure the image path is correct
        style={styles.icon}
      />
      
      {/* Verified Title */}
      <Text style={styles.title}>Confirmed</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>
        The payment was succesful
      </Text>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
    paddingHorizontal: 20, // Ensure padding for smaller screens
  },
  icon: {
    width: 100, // Same size as the icon in the image
    height: 100,
    marginBottom: 20, // Space between icon and text
  },
  titleFirst: {
    fontSize: 35, // Font size for Verified text
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 100, // Space between title and subtitle
  },
  title: {
    fontSize: 35, // Font size for Verified text
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10, // Space between title and subtitle
  },
  subtitle: {
    fontSize: 20,
    color: '#6e6e6e',
    textAlign: 'center', // Centering text for smaller screens
  },
});


