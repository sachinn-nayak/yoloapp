import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyFood() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/cute-cartoon-girl-cap-overalls-3d-rendering 1.png')}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Hi Jane Doe</Text>
        <Text style={styles.university}>( Reva University )</Text>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* My Food Section */}
      <View style={styles.foodSection}>
        <Text style={styles.sectionTitle}>My Food</Text>
        <Text style={styles.description}>Specify your availability</Text>
        <Text style={styles.subDescription}>
          Every meal you choose to skip helps us provide for those in need, so we kindly ask you to act responsibly.
        </Text>

        {/* Date Range Selection */}
        <View style={styles.dateRangeContainer}>
          <View style={styles.dateInputContainer}>
            <TextInput placeholder="DD/MM/YYYY" style={styles.dateInput} />
          </View>
          <Text style={styles.toText}>To</Text>
          <View style={styles.dateInputContainer}>
            <TextInput placeholder="DD/MM/YYYY" style={styles.dateInput} />
          </View>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle" size={30} color="#FF4081" />
          </TouchableOpacity>
        </View>

        {/* Meal Options */}
        <View style={styles.mealOptionsContainer}>
          <View style={styles.mealOption}>
            <Text style={styles.mealOptionText}>Lunch</Text>
            <Ionicons name="close-circle" size={20} color="#FF4081" />
            <Text style={styles.mealOptionDate}>19th Sep</Text>
          </View>

          {/* Meal Choices */}
          <View style={styles.mealChoice}>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Breakfast</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Lunch</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Dinner</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
          </View>
        </View>
      </View>

      {/* Expanded Meal List */}
      {expanded && (
        <View style={styles.expandedMeals}>
          <View style={styles.expandedMealRow}>
            <Text style={styles.mealType}>Lunch</Text>
            <Ionicons name="close-circle" size={20} color="#FF4081" />
            <Text style={styles.mealDate}>20th Sep</Text>
          </View>
          <View style={styles.expandedMealChoices}>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Breakfast</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Lunch</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Dinner</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
          </View>

          <View style={styles.expandedMealRow}>
            <Text style={styles.mealType}>Breakfast</Text>
            <Ionicons name="close-circle" size={20} color="#FF4081" />
            <Text style={styles.mealDate}>21st Sep</Text>
          </View>
          <View style={styles.expandedMealChoices}>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Breakfast</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Lunch</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Dinner</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
          </View>
          
          <View style={styles.expandedMealRow}>
            <Text style={styles.mealType}>Lunch</Text>
            <Ionicons name="close-circle" size={20} color="#FF4081" />
            <Text style={styles.mealType}>Dinner</Text>
            <Ionicons name="close-circle" size={20} color="#FF4081" />
            <Text style={styles.mealDate}>21st Sep</Text>
          </View>
          <View style={styles.expandedMealChoices}>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Breakfast</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Lunch</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
            <View style={styles.mealChoiceOption}>
              <Text style={styles.choiceText}>Dinner</Text>
              <Ionicons name="close-circle" size={20} color="black" />
            </View>
          </View>
        </View>
      )}

      {/* Expand/Collapse Button */}
      <TouchableOpacity onPress={toggleExpand} style={styles.expandButton}>
        <Ionicons
          name={expanded ? 'chevron-up-circle' : 'chevron-down-circle'}
          size={30}
          color="#FF4081"
        />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="restaurant" size={24} color="#FF4081" />
        <Ionicons name="star" size={24} color="white" />
        <Ionicons name="person" size={24} color="white" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A148C',
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  university: {
    color: 'white',
    fontSize: 14,
  },
  logo: {
    width: 60,
    height: 20,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  foodSection: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginVertical: 10,
  },
  sectionTitle: {
    color: '#4A148C',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#4A148C',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  subDescription: {
    color: '#4A148C',
    fontSize: 12,
    textAlign: 'center',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  dateInputContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: '#4A148C',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dateInput: {
    fontSize: 14,
    color: '#4A148C',
  },
  toText: {
    fontSize: 14,
    color: '#4A148C',
  },
  mealOptionsContainer: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  mealOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFCDD2',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  mealOptionText: {
    fontSize: 16,
    color: '#4A148C',
    fontWeight: 'bold',
  },
  mealOptionDate: {
    fontSize: 12,
    color: '#4A148C',
  },
  mealChoice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  mealChoiceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  choiceText: {
    fontSize: 14,
    color: '#4A148C',
  },
  expandedMeals: {
    paddingVertical: 10,
  },
  expandedMealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  mealType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  mealDate: {
    fontSize: 12,
    color: '#4A148C',
  },
  expandedMealChoices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  expandButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4A148C',
    paddingVertical: 15,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
