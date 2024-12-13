import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // or use any icon library
import Home from './screens/home';
import Homenew from './screens/homenew';
import Checkout from './screens/checkout';
import Login from './screens/login';
import Register from './screens/register';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Component
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {/* Profile Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate(state.routes[0].name)}
      >
        <Ionicons
          name="person-circle-outline"
          size={28}
          color={state.index === 0 ? '#2d4e8e' : '#aaa'}
        />
        {state.index === 0 && (
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Account</Text>
        )}
      </TouchableOpacity>

      {/* Notifications Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate(state.routes[3].name)}
      >
        <Ionicons
          name="call-outline"
          size={28}
          color={state.index === 3 ? '#2d4e8e' : '#aaa'}
        />
        {state.index === 3 && (
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Call</Text>
        )}
      </TouchableOpacity>

      {/* Center Add Button */}
      <TouchableOpacity
        style={styles.centerButton}
        onPress={() => navigation.navigate(state.routes[1].name)}
      >
        <Ionicons
          name="add-sharp"
          size={40}
          color="#fff"
          style={styles.boldIcon}
        />
      </TouchableOpacity>

      {/* Checkout Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate(state.routes[4].name)}
      >
        <Ionicons
          name="help-circle-outline"
          size={28}
          color={state.index === 4 ? '#2d4e8e' : '#aaa'}
        />
        {state.index === 4 && (
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Help</Text>
        )}
      </TouchableOpacity>

      {/* HomeNew Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate(state.routes[2].name)}
      >
        <Ionicons
          name="notifications-outline"
          size={28}
          color={state.index === 2 ? '#2d4e8e' : '#aaa'}
        />
        {state.index === 2 && (
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Notice</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const NewScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Profile" component={Home} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="HomeNew" component={Homenew} />
        <Tab.Screen name="Alerts" component={Register} />
        <Tab.Screen name="Cart" component={Checkout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  boldIcon: {
    textShadowColor: 'black',  
    textShadowOffset: { width: 0, height: 0 },  
    textShadowRadius: 2,       // Increased from 5 to 8 for a more pronounced shadow
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButton: {
    // position: 'absolute',
    bottom: 15, // Adjust as needed
    alignSelf: 'center',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#2d4e8e',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2d4e8e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 50,
    elevation: 5,
    borderWidth: 10,
    borderColor: '#ffffff',
  },
  tabLabel: {
    fontSize: 10,
    color: '#aaa',
    marginTop: 2,
  },
  activeTabLabel: {
    color: '#2d4e8e',
    fontWeight: 'bold',
  },
});
