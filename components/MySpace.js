import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For the eye icon
import ProfileImage from '../assets/images/cute-cartoon-girl-cap-overalls-3d-rendering 1.png';
import DosaImage from '../assets/images/delicious-indian-dosa-composition 1.png';
import VegThaliImage from '../assets/images/indian-hindu-veg-thali-food-platter-selective-focus 1.png';
import RotiRiceImage from '../assets/images/indian-delicious-roti-assortment 1.png';
import YoloLogo from '../assets/images/Logo white.png';

const MySpaceScreen = () => {
  const [showWifi, setShowWifi] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Space</Text>
        <Image source={YoloLogo} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Pink Line */}
      <View style={styles.pinkLine} />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Jane Doe</Text>
          <Text style={styles.profileInfo}>( Reva university )</Text>
          <Text style={styles.profileInfo}>PH no. 123 456 7890</Text>
          <Text style={styles.profileLocation}>📍 location</Text>
        </View>
      </View>
      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Room Details */}
      <View style={styles.roomDetails}>
        <Text style={styles.roomDetailText}>Boy's living space</Text>
        <Text style={styles.roomDetailText}>2 Sharing</Text>
         </View>
        <View style={styles.roomDetails}>
        <Text style={styles.roomDetailText}>3rd Floor</Text>
        <Text style={styles.roomDetailText}>Room no 6</Text>
      </View>

      {/* Wi-Fi Details */}
      <View style={styles.wifiContainer}>
        <Text style={styles.wifiHeader}>Wi-Fi Details</Text>
        <View style={styles.wifiRow}>
          <Text style={styles.wifiInfo}>Name: {showWifi ? 'Yolo Living' : '••••••••'}</Text>
          <TouchableOpacity onPress={() => setShowWifi(!showWifi)}>
            <MaterialIcons name={showWifi ? 'visibility-off' : 'visibility'} size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.wifiRow}>
          <Text style={styles.wifiInfo}>Password: {showWifi ? 'yolo living 123' : '••••••••'}</Text>
          <TouchableOpacity onPress={() => setShowWifi(!showWifi)}>
            <MaterialIcons name={showWifi ? 'visibility-off' : 'visibility'} size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
  {/* Menu Section */}
  <View style={styles.menuSection}>
        <Text style={styles.menuHeader}>Today's menu</Text>

        {/* Breakfast */}
        <View style={styles.menuItemBox}>
          <Image source={DosaImage} style={styles.menuImage} />
          <View style={styles.menuDetails}>
            <Text style={styles.menuText}>Dosa</Text>
            <Text style={styles.menuSubText}>Breakfast</Text>
          </View>
        </View>

        {/* Lunch */}
        <View style={styles.menuItemBox}>
          <Image source={VegThaliImage} style={styles.menuImage} />
          <View style={styles.menuDetails}>
            <Text style={styles.menuText}>Veg Thali</Text>
            <Text style={styles.menuSubText}>Lunch</Text>
          </View>
        </View>

        {/* Dinner */}
        <View style={styles.menuItemBox}>
          <Image source={RotiRiceImage} style={styles.menuImage} />
          <View style={styles.menuDetails}>
            <Text style={styles.menuText}>Roti and Rice</Text>
            <Text style={styles.menuSubText}>Dinner</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#432C83',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    top:28,
  },
  logo: {
    width: 80, // Adjusted width for better visibility
    height: 40,
    top:30, // Adjusted height for better visibility
  },
  pinkLine: {
    height: 3,
    backgroundColor: '#F72585',
    marginVertical: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    marginLeft: 15,
  },
  profileName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    color: 'white',
    fontSize: 16,
  },
  profileLocation: {
    color: '#E94560',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#341F97',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
  },
  roomDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  roomDetailText: {
    color: '#DCC7FF',
    backgroundColor: '#5A3EBC',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    flex: 1,
    margin: 5,
  },
  wifiContainer: {
    backgroundColor: '#5A3EBC',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  wifiHeader: {
    color: '#F72585',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wifiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  wifiInfo: {
    color: 'white',
    fontSize: 16,
  },
  menuSection: {
    marginTop: 20,
  },
  menuHeader: {
    color: '#3498DB',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuSection: {
    marginTop: 20,
  },
  menuHeader: {
    color: '#3498DB',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItemBox: {
    backgroundColor: '#FDF6E3', // Background color for the item box
    borderRadius: 15, // Rounded corners
    padding: 10, // Padding inside the box
    marginBottom: 12, // Space between boxes
    flexDirection: 'row', // Align image and text in a row
    alignItems: 'center', // Center align items vertically
  },
  menuImage: {
    width: 70, // Adjusted width for better layout
    height: 70, // Adjusted height for better layout
    borderRadius: 10,
  },
  menuDetails: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  menuSubText: {
    color: 'black',
    fontSize: 16,
    left:40,
  },
});

export default MySpaceScreen;
