import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Platform } from 'react-native';
import AppNavigator from './screens/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/navigation/SplashScreen';
import RNBootSplash from "react-native-bootsplash";
import First from './screens/tour/first';


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    // Hide the native splash screen after the React Native splash screen is done
    RNBootSplash.hide({ fade: true });
  }, []);
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {/* Splash Screen */}
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          {/* Main App */}
          <Stack.Screen
            name="Home"
            component={First}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({

});
