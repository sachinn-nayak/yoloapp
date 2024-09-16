import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// Importing local images
import ProfileImage from '../assets/images/cute-cartoon-girl-cap-overalls-3d-rendering 1.png';
import DosaImage from '../assets/images/delicious-indian-dosa-composition 1.png';
import VegThaliImage from '../assets/images/indian-hindu-veg-thali-food-platter-selective-focus 1.png';
import RotiRiceImage from '../assets/images/indian-delicious-roti-assortment 1.png';
import YoloLogo from '../assets/images/logo.png'; // Logo image

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.time}>9:11</Text>
        <Text style={styles.spaceText}>My Space</Text>
        <Image source={YoloLogo} style={styles.logo} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.university}>( Reva university )</Text>
        <Text style={styles.phone}>PH no. 123 456 7890</Text>
        <View style={styles.locationContainer}>
          <Entypo name="location-pin" size={18} color="#FF4A4A" />
          <Text style={styles.location}>location</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Living Space Section */}
      <View style={styles.livingSpace}>
        <Text style={styles.livingSpaceText}>Boy’s living space</Text>
        <Text style={styles.livingSpaceText}>2 Sharing</Text>
        <Text style={styles.livingSpaceText}>3rd Floor</Text>
        <Text style={styles.livingSpaceText}>Room no 6</Text>
      </View>

      {/* Wi-Fi Details */}
      <View style={styles.wifiSection}>
        <Text style={styles.wifiTitle}>Wi-Fi Details</Text>
        <Text style={styles.wifiText}>Name : Yolo Living</Text>
        <View style={styles.wifiDetail}>
          <Text style={styles.wifiText}>Password : yolo living 123</Text>
          <Entypo name="eye-with-line" size={18} color="#D9D9D9" />
        </View>
      </View>

      {/* Today's Menu */}
      <View style={styles.menuSection}>
        <Text style={styles.menuTitle}>Today's menu</Text>
        {/* Menu Item 1 */}
        <View style={styles.menuItem}>
          <Image source={DosaImage} style={styles.menuImage} />
          <Text style={styles.menuText}>Dosa</Text>
          <Text style={styles.menuType}>Breakfast</Text>
        </View>
        {/* Menu Item 2 */}
        <View style={styles.menuItem}>
          <Image source={VegThaliImage} style={styles.menuImage} />
          <Text style={styles.menuText}>Veg Thali</Text>
          <Text style={styles.menuType}>Lunch</Text>
        </View>
        {/* Menu Item 3 */}
        <View style={styles.menuItem}>
          <Image source={RotiRiceImage} style={styles.menuImage} />
          <Text style={styles.menuText}>Roti and Rice</Text>
          <Text style={styles.menuType}>Dinner</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#6E57E0',
    padding: 20,
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  time: {
    color: '#FFF',
    fontSize: 16,
  },
  spaceText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
  },
  university: {
    fontSize: 16,
    color: '#D9D9D9',
  },
  phone: {
    fontSize: 16,
    color: '#D9D9D9',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 16,
    color: '#FFF',
  },
  editProfileButton: {
    backgroundColor: '#3B308E',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 15,
  },
  editProfileText: {
    color: '#FFF',
    fontSize: 16,
  },
  livingSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  livingSpaceText: {
    backgroundColor: '#897EF9',
    padding: 10,
    color: '#FFF',
    borderRadius: 8,
    marginBottom: 5,
    flexGrow: 1,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  wifiSection: {
    marginVertical: 20,
  },
  wifiTitle: {
    fontSize: 18,
    color: '#E24B5A',
    marginBottom: 10,
  },
  wifiText: {
    color: '#FFF',
    fontSize: 16,
  },
  wifiDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  menuSection: {
    marginVertical: 20,
  },
  menuTitle: {
    fontSize: 18,
    color: '#61A0FF',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  menuText: {
    fontSize: 18,
    color: '#FFF',
    flex: 1,
  },
  menuType: {
    fontSize: 14,
    color: '#D9D9D9',
  },
});

export default ProfileScreen;
