import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Home from '../home';
import Login from '../login';
import Homenew from '../homenew';
import Register from '../register';
import Checkout from '../checkout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // or use any icon library
import SplashScreen from './SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from '../tour/first';
import Second from '../tour/Second';
import Third from '../tour/Third';
import Fourth from '../tour/Fourth';
import Last from '../tour/Last';
// import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const firstScreen =
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


const AppNavigator = () => {
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
                    component={TabNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Tour"
                    component={First}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Second"
                    component={Second}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Third"
                    component={Third}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Fourth"
                    component={Fourth}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Last"
                    component={Last}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabNavigation() {
    return (
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
    )
}

export default AppNavigator

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
        // top: 737,
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
        // shadowColor: '#2d4e8e',
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
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
})