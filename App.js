import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Platform, StatusBar } from 'react-native';
import AppNavigator from './screens/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/navigation/SplashScreen';
import RNBootSplash from "react-native-bootsplash";
import { Provider } from 'react-redux';
import store from './screens/store';




const App = () => {
  useEffect(() => {
    // Hide the native splash screen after the React Native splash screen is done
    RNBootSplash.hide({ fade: true });
  }, []);
  return (

    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppNavigator />
    </Provider>

  );
};

export default App;

const styles = StyleSheet.create({

});
