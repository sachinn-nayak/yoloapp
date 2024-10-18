import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { RadioButton } from 'react-native-paper'; 

const ExtendStay = () => {
  const [checked, setChecked] = useState('UPI');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>  
        </TouchableOpacity>
        <Text style={styles.logoText}>Your Logo</Text>
      </View>

      <Text style={styles.title}>Extend Stay</Text>

      <Text style={styles.sectionLabel}>To extend your stay</Text>
      <Text style={styles.sectionSubLabel}>Please Select the start and end dates</Text>
      
      <View style={styles.dateInputContainer}>
        <TextInput
          style={styles.dateInput}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#B5B5B5"
        />
        <Text style={styles.toText}>To</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#B5B5B5"
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
        <SvgUri
          width="40"
          height="40"
          source={require('../assets/images/google-pay-icon.png')} // Path to your SVG file
        />
        <Text style={styles.preferredLabel}>Google Pay</Text>
        <TouchableOpacity style={styles.payButton}>
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
  },
  backButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionSubLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
    fontSize: 18,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryContainer: {
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingTop: 10,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ExtendStay;
