import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// List of colleges
const colleges = [
  'Indian Institute of Science, Bengaluru',
  'Indian Institute of Management, Bengaluru',
  'National Institute of Fashion Technology, Bengaluru',
  'Bangalore Institute of Technology',
  'R.V. College of Engineering',
  'B.M.S. College of Engineering',
  'Vivekananda Institute of Technology',
  'Karnataka College of Management',
  'Christ University',
  'Manipal University',
  'M.S. Ramaiah Institute of Technology',
  'Nitte Meenakshi Institute of Technology',
  // Add more colleges as needed
];

const Q3Screen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const navigation = useNavigation();

  // Handle navigation to Q4Screen and pass selected college
  const handleNextScreen = () => {
    if (selectedCollege) {
      navigation.navigate('Q4Screen', { college: selectedCollege });
      Keyboard.dismiss(); // Dismiss keyboard when navigating
    } else {
      alert('Please select a college');
    }
  };

  // Handle search for colleges
  const handleSearch = (text) => {
    setSearchText(text);
    if (text.length > 0) {
      const filtered = colleges.filter(college =>
        college.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredColleges(filtered);
    } else {
      setFilteredColleges([]); // Reset to an empty array if search is empty
    }
  };

  // Handle selection of college
  const handleSelectCollege = (college) => {
    setSelectedCollege(college); // Update the selected college
    setSearchText(college); // Set the selected college to the search input
    setFilteredColleges([]); // Clear the filtered list after selection
    Keyboard.dismiss(); // Dismiss keyboard when selecting
  };

  return (
    <View style={styles.container}>
      {/* Pink and blue ellipses */}
      <View style={styles.ellipseContainer}>
        <View style={styles.pinkEllipse}></View>
        <View style={styles.blueEllipse}></View>
      </View>

      {/* Image container for Vidhana Soudha */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/vidhana-soudha-bangalore 1.png')} style={styles.image} />
      </View>

      {/* Question label */}
      <Text style={styles.textLabel}>Which college are you from?</Text>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your college"
          placeholderTextColor="white"
          value={searchText} // Shows the selected college
          onChangeText={handleSearch} // Updates search results
        />
        <TouchableOpacity onPress={handleNextScreen}>
          <Ionicons name="arrow-forward" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Filtered colleges list */}
      {filteredColleges.length > 0 && (
        <FlatList
          data={filteredColleges}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.collegeItem,
                item === selectedCollege && styles.selectedCollegeItem
              ]}
              onPress={() => handleSelectCollege(item)} // Update the selected college on press
            >
              <Text style={styles.collegeText}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.locationList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ellipseContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  pinkEllipse: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#E149A0',
    borderRadius: 50,
    top: 60,
    left: 70,
  },
  blueEllipse: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#4193E1',
    borderRadius: 20,
    top: 400,
    right: 330,
  },
  imageContainer: {
    position: 'absolute',
    top: 160,
    right: -30,
    width: 300,
    height: 300,
    borderRadius: 200,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: '#F9C646',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 300,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E278D',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%', // Adjust width as needed
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: 'white',
  },
  icon: {
    marginLeft: 10,
  },
  locationList: {
    width: '80%',
    maxHeight: 150,
    marginBottom: 20,
  },
  collegeItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedCollegeItem: {
    backgroundColor: '#E6E6FA',
  },
  collegeText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Q3Screen;
