import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// Import images
const roomPic1 = require('../assets/images/DSC09388 1.png');
const yoloLogo = require('../assets/images/logo.png');
const profilePic = require('../assets/images/cute-cartoon-girl-cap-overalls-3d-rendering 1.png');
const dosaImg = require('../assets/images/delicious-indian-dosa-composition 1.png');
const vegThaliImg = require('../assets/images/indian-hindu-veg-thali-food-platter-selective-focus 1.png');
const rotiImg = require('../assets/images/indian-delicious-roti-assortment 1.png');
const laundryServiceImg = require('../assets/images/front-view-young-female-with-washing-machine-preparing-clothes-white-wall-removebg-preview 2.png');
const gymBg = require('../assets/images/d8dc1875f6 1.png'); // Gym background image

const MySpaceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={profilePic} style={styles.profileImage} />
        <Text style={styles.headerText}>Hi Jane Doe</Text>
        <Image source={yoloLogo} style={styles.yoloLogo} />
      </View>

      {/* My Space Section */}
      <View style={styles.mySpaceContainer}>
        <Text style={styles.sectionTitle}>My Space</Text>
        <View style={styles.roomDetails}>
          <View>
            <Text style={styles.roomDetailText}>104 {} Room no</Text>
            <Text style={styles.roomDetailText}>2 Sharing</Text>
            <Text style={styles.roomDetailText}>Boy's Living space</Text>
            <Text style={styles.roomDetailText}>3rd Floor</Text>
          </View>
          <Image source={roomPic1} style={styles.roomImage} />
        </View>
        <Text style={styles.locationText}>Girls' Living Space, Block No. 1</Text>
      </View>

      {/* Gym Timings Section */}
      <ImageBackground source={gymBg} style={styles.gymBackground}>
        <View style={styles.gymTimingsContainer}>
          <Text style={styles.sectionTitle}>Gym Timings</Text>
          <View style={styles.gymTiming}>
            <View style={styles.timingBox}>
              <Text style={styles.timingLabel}>Morning</Text>
              <Text style={styles.timingTime}>05:30 AM - 11:00 AM</Text>
            </View>
          </View>
          <View style={styles.gymTiming}>
            <View style={styles.timingBox}>
              <Text style={styles.timingLabel}>Afternoon</Text>
              <Text style={styles.timingTime}>12:00 PM - 05:00 PM</Text>
            </View>
          </View>
          <View style={styles.gymTiming}>
            <View style={styles.timingBox}>
              <Text style={styles.timingLabel}>Evening</Text>
              <Text style={styles.timingTime}>05:30 PM - 11:00 PM</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Today's Menu */}
      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Today's Menu</Text>
        <View style={styles.menuItem}>
          <Image source={dosaImg} style={styles.menuImage} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Dosa</Text>
            <Text style={styles.menuSubText}>Breakfast</Text>
          </View>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuItem}>
          <Image source={vegThaliImg} style={styles.menuImage} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Veg Thali</Text>
            <Text style={styles.menuSubText}>Lunch</Text>
          </View>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuItem}>
          <Image source={rotiImg} style={styles.menuImage} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuText}>Roti and Rice</Text>
            <Text style={styles.menuSubText}>Dinner</Text>
          </View>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Laundry Service Section */}
      <View style={styles.laundryServiceContainer}>
        <Image source={laundryServiceImg} style={styles.laundryServiceImage} />
        <Text style={styles.laundryServiceText}>
          YOLO laundry service provides in-house laundry for paying guests, ensuring fresh and clean clothes regularly.
        </Text>
      </View>

      {/* Legal Section */}
      <View style={styles.legalContainer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Guest Policy</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="cutlery" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="question-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF478C',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  yoloLogo: {
    width: 50,
    height: 50,
  },
  mySpaceContainer: {
    backgroundColor: '#4754d4',
    margin: 15,
    padding: 15,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  roomDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roomDetailText: {
    color: 'white',
    marginBottom: 8,
  },
  roomImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  locationText: {
    marginTop: 10,
    color: 'white',
  },
  gymBackground: {
    margin: 15,
    padding: 15,
    borderRadius: 15,
  },
  gymTimingsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 10,
  },
  gymTiming: {
    marginBottom: 10,
  },
  timingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timingLabel: {
    color: '#FF478C',
  },
  timingTime: {
    color: '#004AAD',
  },
  menuContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  menuImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  menuTextContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuSubText: {
    color: '#7f7f7f',
  },
  skipButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
},
skipButtonText: {
  color: '#FF478C',
  fontWeight: 'bold',
},
laundryServiceContainer: {
  backgroundColor: '#FF478C',
  margin: 15,
  padding: 20,
  borderRadius: 15,
  flexDirection: 'row',
  alignItems: 'center',
},
laundryServiceImage: {
  width: 100,
  height: 100,
  borderRadius: 10,
  marginRight: 10,
},
laundryServiceText: {
  color: 'white',
  flex: 1,
  fontSize: 14,
},
legalContainer: {
  padding: 20,
  backgroundColor: '#fff',
  margin: 15,
  borderRadius: 15,
},
footerText: {
  fontSize: 14,
  color: '#004AAD',
  marginBottom: 10,
},
bottomNav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 10,
  backgroundColor: '#4E47C2',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
navButton: {
  alignItems: 'center',
  justifyContent: 'center',
},
});

export default MySpaceScreen;
