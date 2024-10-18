import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const ExtendStay = () => {
  const [checked, setChecked] = useState('UPI');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  // Function to format date as DD/MM/YYYY
  const handleDateInput = (text, setDate, currentDate) => {
    let formattedText = text.replace(/\D/g, ''); // Remove all non-digit characters
  
    // Handle backspace scenario: If input is less than the previous state, adjust
    if (currentDate.length > text.length) {
      // Backspace handling
      if (currentDate.endsWith('/')) {
        formattedText = formattedText.slice(0, -1); // Remove the last digit if backspace after a `/`
      }
    }
  
    if (formattedText.length >= 2 && formattedText.length < 4) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
    } else if (formattedText.length >= 4) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2, 4)}/${formattedText.slice(4, 8)}`;
    }
  
    setDate(formattedText);
  };

  // Date validation function
  const isValidDate = (date) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(date);
  };

  // Function to handle Pay Now button click
  const handlePayNow = () => {
    if (!isValidDate(startDate) || !isValidDate(endDate)) {
      Alert.alert('Invalid Date', 'Please enter valid dates in DD/MM/YYYY format.');
      return;
    }

    const start = new Date(startDate.split('/').reverse().join('-'));
    const end = new Date(endDate.split('/').reverse().join('-'));

    if (start >= end) {
      Alert.alert('Invalid Date Range', 'The end date must be after the start date.');
      return;
    }

    // Navigate to ConfirmScreen upon successful validation
    navigation.navigate('ConfirmScreen'); // Ensure 'ConfirmScreen' exists in your navigation stack
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MyPlan')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')} // Adjust the path to match your actual image location
        />
      </View>
      <Text style={styles.title}>Extend Stay</Text>
      <Text style={styles.sectionLabel}>To extend your stay</Text>
      <Text style={styles.sectionSubLabel}>Please Select the start and end dates</Text>

      <View style={styles.dateInputContainer}>
        <TextInput
          style={styles.dateInput}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#B5B5B5"
          keyboardType="numeric"
          maxLength={10}
          value={startDate}
          onChangeText={(text) => handleDateInput(text, setStartDate, startDate)}
        />
        <Text style={styles.toText}>To</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#B5B5B5"
          keyboardType="numeric"
          maxLength={10}
          value={endDate}
          onChangeText={(text) => handleDateInput(text, setEndDate, endDate)}
        />
      </View>

      <Text style={styles.paymentLabel}>Payment</Text>

      <View style={styles.paymentOptions}>
        <View style={styles.radioGroup}>
          <RadioButton
            value="Card"
            status={checked === 'Card' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Card')}
          />
          <Text style={styles.radioText}>Card</Text>
        </View>
        <View style={styles.radioGroup}>
          <RadioButton
            value="Bank"
            status={checked === 'Bank' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Bank')}
          />
          <Text style={styles.radioText}>Bank</Text>
        </View>
        <View style={styles.radioGroup}>
          <RadioButton
            value="UPI"
            status={checked === 'UPI' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('UPI')}
          />
          <Text style={styles.radioText}>UPI</Text>
        </View>
      </View>

      <Text style={styles.preferredLabel}>Preferred</Text>
      <View style={styles.paymentMethod}>
        <View style={styles.paymentMethodLeft}>
          <Image
            style={styles.paymentIcon}
            source={require('../assets/images/google-pay-icon.png')} // Replace with your actual image path
          />
          <Text style={styles.preferredLabel}>Google Pay</Text>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.noteText}>Note: Check your UPI app for a payment notification</Text>

      <Text style={styles.summaryTitle}>Review your payment summary</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Name : Jane Doe</Text>
        <Text style={styles.summaryText}>Date : 29/08/2024</Text>
        <Text style={styles.summaryText}>Invoice no : 12345</Text>
        <Text style={styles.summaryText}>Period : 30 Days</Text>
        <Text style={styles.summaryText}>Amount: ₹12,000</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    marginRight: 15,
    padding: 5,
    bottom: -25,
  },
  backButtonText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    bottom: -30,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionSubLabel: {
    fontSize: 17,
    color: '#666',
    marginBottom: 13,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    width: '40%',
    textAlign: 'center',
  },
  toText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentLabel: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 16,
  },
  preferredLabel: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 11,
    bottom: -6,
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  payButton: {
    backgroundColor: '#4A3AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  noteText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop: 10,
  },
  summaryText: {
    fontSize: 19,
    marginBottom: 5,
  },
});

export default ExtendStay;
