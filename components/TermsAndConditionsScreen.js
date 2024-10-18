import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function TermsAndConditionsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.subTitle}>
          By using the Yolo PG app, you agree to the following terms and conditions:
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
          <Text style={styles.sectionText1}>
            By accessing or using the Yolo PG app, you acknowledge that you have read, understood, 
            and agree to be bound by these terms. If you do not agree, you should discontinue the 
            use of the app immediately.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
          <Text style={styles.sectionText}>
            • Users must ensure that the information provided during registration (e.g., name, contact 
            details, room number) is accurate and up-to-date.
          </Text>
          <Text style={styles.sectionText}>
            • Any unauthorized sharing of Wi-Fi credentials or misuse of the provided services may result 
            in account termination or other penalties.
          </Text>
          <Text style={styles.sectionText}>
            • Users are responsible for their own devices’ security when connected to the Yolo Living Wi-Fi network.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Living Space Usage</Text>
          <Text style={styles.sectionText}>
            • Rooms and common areas must be used responsibly. Any damage caused to property will be borne by the individual(s) responsible.
          </Text>
          <Text style={styles.sectionText}>
            • The management reserves the right to inspect rooms for cleanliness and maintenance checks.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Wi-Fi Usage</Text>
          <Text style={styles.sectionText}>
            • The Wi-Fi service is provided for personal use. Commercial or illegal activities using the Wi-Fi connection are strictly prohibited.
          </Text>
          <Text style={styles.sectionText}>
            • The management reserves the right to monitor and restrict access to certain websites or content.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Food and Menu</Text>
          <Text style={styles.sectionText}>
            • The food provided as per the menu (e.g., Dosa for breakfast, Veg Thali for lunch, Roti and Rice for dinner) is subject to availability. 
              The menu is curated with a balance of nutrition and variety in mind, but may change without prior notice.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Liability Disclaimer</Text>
          <Text style={styles.sectionText}>
            • Yolo PG is not responsible for any loss, damage, or injury sustained by the user due to their usage of the provided services.
          </Text>
        </View>
      </ScrollView>

      {/* Accept Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifiedScreen')}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50, // Adjust for the notch/header space
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    left:10,
    fontSize: 16,
    lineHeight: 22,
  },
  sectionText1: {
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#00C853',
    paddingVertical: 15,
    width:"70%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 35,
    left:20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
