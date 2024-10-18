import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ProfileImage from '../assets/images/cute-cartoon-girl-cap-overalls-3d-rendering 1.png';
import DosaImage from '../assets/images/delicious-indian-dosa-composition 1.png';
import VegThaliImage from '../assets/images/indian-hindu-veg-thali-food-platter-selective-focus 1.png';
import RotiRiceImage from '../assets/images/indian-delicious-roti-assortment 1.png';
import YoloLogo from '../assets/images/logo.png'; // Logo image

export default function MySpace() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>MySpace</Text>
        <Image source={YoloLogo} style={styles.logo} />
      </View>

      {/* Pink line */}
      <View style={styles.pinkLine} />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Jane Doe</Text>
          <Text style={styles.profileInfo}>( Reva university )</Text>
          <Text style={styles.profileInfo}>PH no. 123 456 7890</Text>
          <View style={styles.location}>
            <Text style={styles.profileInfo}>location</Text>
          </View>
        </View>
      </View>

      {/* Living Space Details */}
      <View style={styles.spaceDetails}>
        <Text style={styles.spaceButton}>Boy’s living space</Text>
        <Text style={styles.spaceButton}>2 Sharing</Text>
        <Text style={styles.spaceButton}>3rd Floor</Text>
        <Text style={styles.spaceButton}>Room no 6</Text>
      </View>

      {/* Wi-Fi Details */}
      <View style={styles.wifiDetails}>
        <Text style={styles.wifiTitle}>Wi-Fi Details</Text>
        <View style={styles.wifiRow}>
          <Text style={styles.wifiText}>Name: Yolo Living</Text>
        </View>
        <View style={styles.wifiRow}>
          <Text style={styles.wifiText}>Password: yolo living 123</Text>
        </View>
      </View>

      {/* Today's Menu */}
      <Text style={styles.menuTitle}>Today's menu</Text>
      <View style={styles.menuSection}>
        <View style={styles.menuItem}>
          <Image source={DosaImage} style={styles.menuImage} />
          <View style={styles.menuText}>
            <Text style={styles.menuName}>Dosa</Text>
            <Text style={styles.mealTime}>Breakfast</Text>
          </View>
        </View>

        <View style={styles.menuItem}>
          <Image source={VegThaliImage} style={styles.menuImage} />
          <View style={styles.menuText}>
            <Text style={styles.menuName}>Veg Thali</Text>
            <Text style={styles.mealTime}>Lunch</Text>
          </View>
        </View>

        <View style={styles.menuItem}>
          <Image source={RotiRiceImage} style={styles.menuImage} />
          <View style={styles.menuText}>
            <Text style={styles.menuName}>Roti and Rice</Text>
            <Text style={styles.mealTime}>Dinner</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F57D2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 50,
    bottom:-10,
  },
  pinkLine: {
    backgroundColor: '#FF6B83', // Pink color
    height: 3,
    marginTop: 10,
    marginHorizontal: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    marginLeft: 20,
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileInfo: {
    color: '#E1D4F9',
    fontSize: 14,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  spaceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  spaceButton: {
    backgroundColor: '#9A84D1',
    padding: 10,
    borderRadius: 10,
    color: '#fff',
    fontSize: 14,
  },
  wifiDetails: {
    paddingHorizontal: 20,
  },
  wifiTitle: {
    color: '#FF6B83',
    fontSize: 16,
    marginVertical: 10,
  },
  wifiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wifiText: {
    color: '#E1D4F9',
    fontSize: 14,
  },
  menuTitle: {
    color: '#68C8FF',
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  menuImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  menuText: {
    marginLeft: 10,
  },
  menuName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mealTime: {
    fontSize: 14,
    color: '#8E8E8E',
  },
});
