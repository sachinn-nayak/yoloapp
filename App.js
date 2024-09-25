import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './components/Onboarding'; 
import SignInScreen from './components/SignInScreen'; 
import SignUpScreen from './components/SignUpScreen'; 
import VerifiedScreen from './components/VerifiedScreen'; 
import Q1Screen from './components/Q1Screen';
import Q2Screen from './components/Q2Screen';
import Q3Screen from './components/Q3Screen';
import Q4Screen from './components/Q4Screen';
import Q5Screen from './components/Q5Screen';
import Q6Screen from './components/Q6Screen';
import Q7Screen from './components/Q7Screen';
import ThankYou from './components/ThankYou';
import MySpace from './components/MySpace';
import MySpace2 from './components/MySpace2';
import MyFood from './components/MyFood';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false, // This will hide the back arrow and screen name on all screens
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifiedScreen" component={VerifiedScreen} />
        <Stack.Screen name="Q1Screen" component={Q1Screen} />
        <Stack.Screen name="Q2Screen" component={Q2Screen} />
        <Stack.Screen name="Q3Screen" component={Q3Screen} />
        <Stack.Screen name="Q4Screen" component={Q4Screen} />
        <Stack.Screen name="Q5Screen" component={Q5Screen} />
        <Stack.Screen name="Q6Screen" component={Q6Screen} />
        <Stack.Screen name="Q7Screen" component={Q7Screen} />
        <Stack.Screen name="ThankYou" component={ThankYou} />
        {/* <Stack.Screen name="MySpace" component={MySpace} /> */}
        {/* <Stack.Screen name="MySpace2" component={MySpace2} /> */}
        {/* <Stack.Screen name="MyFood" component={MyFood} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
