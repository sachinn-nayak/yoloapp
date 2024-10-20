import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
  const [keyboardVisible, setKeyboardVisible] = useState(false); // Track keyboard visibility
  const navigation = useNavigation();

  useEffect(() => {
    // Add keyboard event listeners
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Cleanup listeners
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleNextScreen = () => {
    if (selectedCollege) {
      navigation.navigate('Q4Screen', { college: selectedCollege });
      Keyboard.dismiss();
    } else {
      alert('Please select a college');
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.length > 0) {
      const filtered = colleges.filter((college) =>
        college.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredColleges(filtered);
    } else {
      setFilteredColleges([]);
    }
  };

  const handleSelectCollege = (college) => {
    setSelectedCollege(college);
    setSearchText(college);
    setFilteredColleges([]);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Pink and blue ellipses */}
          <View
            style={[
              styles.ellipseContainer,
              keyboardVisible && { top: 10 ,left:10}, // Adjust position when keyboard is visible
            ]}
          >
            <View style={styles.pinkEllipse}></View>
            <View style={styles.blueEllipse}></View>
          </View>

          {/* Image container for Vidhana Soudha */}
          <View
            style={[
              styles.imageContainer,
              keyboardVisible && { top: 70 }, // Adjust image position
            ]}
          >
            <Image
              source={require('../assets/images/vidhana-soudha-bangalore 1.png')}
              style={styles.image}
            />
          </View>

          {/* Question label */}
          <Text
            style={[
              styles.textLabel,
              keyboardVisible && { marginTop: 350 }, // Adjust question label position
            ]}
          >
            Which college are you from?
          </Text>

          {/* Search bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search your college"
              placeholderTextColor="white"
              value={searchText}
              onChangeText={handleSearch}
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
                    styles.locationItem,
                    item === selectedCollege && styles.selectedLocationItem,
                  ]}
                  onPress={() => handleSelectCollege(item)}
                >
                  <Text style={styles.locationText}>{item}</Text>
                </TouchableOpacity>
              )}
              style={styles.locationList}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  ellipseContainer: {
    position: 'absolute',
    top: 60,
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
    top: 30,
    left: 50,
  },
  blueEllipse: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#4193E1',
    borderRadius: 20,
    top: 300,
    right: 350,
  },
  imageContainer: {
    position: 'absolute',
    top: 200,
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
    marginBottom: 16,
    marginTop: 500,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3E278D',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
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
    maxHeight: 160,
    marginBottom: 18,
    top:-25,
  },
  locationItem: {
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedLocationItem: {
    backgroundColor: '#E6E6FA',
  },
  locationText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Q3Screen;
