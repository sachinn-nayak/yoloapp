import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Get device screen dimensions for responsive design
const { width, height } = Dimensions.get('window');

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo in the top-left corner */}
      <Image
        source={require('../assets/images/logo.png')}  // Path to the logo image
        style={styles.logo}
      />

      {/* Woman Image */}
      <Image
        source={require('../assets/images/woman.png')}  // Path to the woman image
        style={styles.personImage}
      />

      {/* First Pink Overlay Background (Rectangle 147) */}
      <Image
        source={require('../assets/images/Rectangle 147.png')}  // First rectangle (top card)
        style={styles.overlayTop}
      />

      {/* Second Pink Overlay Background (Rectangle 148) */}
      <Image
        source={require('../assets/images/Rectangle 148.png')}  // Second rectangle (bottom card)
        style={styles.overlayBottom}
      />

      {/* Text Section on Pink Cards */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Yolo</Text>
        <Text style={styles.subtitle}>
          Here’s to living your{'\n'}best life!
        </Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignInScreen')} // Navigate to the next screen
      >
        <Image
          source={require('../assets/images/Vector.png')}  // Path to the arrow icon
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 120,  // Adjust as per logo size
    height: 60,
    resizeMode: 'contain',
    position: 'absolute',
    top: 50,
    left: 20,  // Positioning logo to top-left
  },
  personImage: {
    width: width * 0.8,  // Adjust the size to fit screen width dynamically
    height: height * 0.5,
    position: 'absolute',
    top: '10%',
    right: '0%',
    resizeMode: 'cover',
  },
  overlayTop: {
    width: width * 1.4,  // Making the rectangle cover most of the screen width
    height: height * 0.85,  // Adjust height dynamically to fit screen
    position: 'absolute',
    bottom: '-9%',  // Position for overlap with the bottom rectangle
    left: '-18%',   // Shift to the left for appropriate placement
    transform: [{ rotate: '-1deg' }],  // Slant for Rectangle 147
    resizeMode: 'contain',
  },
  overlayBottom: {
    width: width * 1,  // Making the rectangle cover most of the screen width
    height: height * 0.60,  // Adjust height dynamically to fit screen
    position: 'absolute',
    bottom: '10%',  // This ensures it covers the bottom portion
    left: '-7%',    // Shift for alignment with the top card
    transform: [{ rotate: '-2deg' }],  // Slight rotation for Rectangle 148
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    bottom: height * 0.30,  // Position text in the middle of the cards
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 42,  // Adjust size for better fit
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 29,
    marginTop: 39,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  button: {
    position: 'absolute',
    bottom: 120,  // Ensure the button is placed near the bottom #FFFFFF
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 60,
    height: 60,
    tintColor: '#FFFFFF',  // Pink color for the arrow
  },
});
