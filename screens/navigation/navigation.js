import { Alert, BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Product from '../product';
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
import Fourth from '../tour/StepIndicator';
import Last from '../tour/Last';
import LoginScreen from '../auth/LoginScreen';
import Index from '..';
import CenterIcon from '../../assets/SVG/centerIcon';
import BackIcon from '../../assets/SVG/backIcon';
import ExitIcon from '../../assets/SVG/ExitIcon';
import { useSelector } from 'react-redux';
import Logo from '../../assets/SVG/logo';
import Form from '../tour/Form';
// import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const firstScreen =
const CustomTabBar = ({ state, descriptors, navigation }) => {
    const progress = useSelector((state) => state.progress.value);
    const centerButtonColor = progress >= 0.6 ? '#4CAF50' : '#2d4e8e';
    console.log('Progress Valuess:', progress);
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
                <Text
                    style={[
                        styles.tabLabel,
                        { color: state.index === 0 ? '#2d4e8e' : '#aaa' }, // Conditional color
                    ]}
                >
                    Account
                </Text>
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
                <Text
                    style={[
                        styles.tabLabel,
                        { color: state.index === 3 ? '#2d4e8e' : '#aaa' }, // Conditional color
                    ]}
                >
                    Call
                </Text>
            </TouchableOpacity>

            {/* Center Add Button */}
            <TouchableOpacity
                style={[styles.centerButton, { backgroundColor: centerButtonColor }]}
                onPress={() => navigation.navigate(state.routes[1].name)}
            >
                {/* <Ionicons
                    name="add-sharp"
                    size={40}
                    color="#fff"
                    style={styles.boldIcon}
                /> */}
                <View style={styles.boldIcon}>
                    <CenterIcon width="32" height="32" />
                </View>
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
                <Text
                    style={[
                        styles.tabLabel,
                        { color: state.index === 4 ? '#2d4e8e' : '#aaa' }, // Conditional color
                    ]}
                >
                    Help
                </Text>
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
                <Text
                    style={[
                        styles.tabLabel,
                        { color: state.index === 2 ? '#2d4e8e' : '#aaa' }, // Conditional color
                    ]}
                >
                    Notice
                </Text>
            </TouchableOpacity>
        </View>

    );
};

const MultiStepFormStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Form" component={Form} />
            {/* <Stack.Screen name="FormStep2" component={FormStep2} /> */}
            {/* Add more steps as needed */}
        </Stack.Navigator>
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
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: true,
                        headerTitle: (props) => <LogoTitle {...props} />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function LogoTitle() {
    return (
        <View style={styles.logoContainer}>
            {/* <Image
                style={styles.logoImage}
                source={require('../../assets/logo.png')}
                onError={(e) => console.log('Image Load Error: ', e.nativeEvent.error)} // Debug: Log errors if the image fails to load
            /> */}
            <Logo />
            {/* <Text style={styles.logoText}>Logo</Text> */}
        </View>
    );
}

function TabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Product"

            screenOptions={({ navigation }) => ({
                // tabBarStyle: { backgroundColor: "red" },
                // headerStyle: { backgroundColor: "red" },
                headerShown: true,
                headerTitle: (props) => <LogoTitle {...props} />,
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => {
                            if (navigation.canGoBack()) {
                                navigation.goBack();
                            } else {
                                Alert.alert(
                                    'Exit App',
                                    'Are you sure you want to exit?',
                                    [
                                        { text: 'Cancel', style: 'cancel' },
                                        { text: 'Exit', onPress: () => BackHandler.exitApp() },
                                    ],
                                    { cancelable: true }
                                );
                            }
                        }}
                        style={{ marginRight: 15 }}
                    >
                        {navigation.canGoBack() ? (
                            <BackIcon width={24} height={24} />
                        ) : (
                            <ExitIcon width={24} height={24} />
                        )}
                    </TouchableOpacity>
                ),
            })}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Index" component={Index} />
            <Tab.Screen name="Product" component={Product} />
            <Tab.Screen name="HomeNew" component={Homenew} />
            <Tab.Screen name="Alerts" component={Register} />
            <Tab.Screen name="Cart" component={Checkout} />
            <Tab.Screen
                name="MultiStepForm"
                component={MultiStepFormStack}
                options={{ tabBarButton: () => null }} // Hides the tab bar button
            />
        </Tab.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({
    logoContainer: {
        // flex: 1, // Take up the entire available space
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'black',
        justifyContent: 'center', // Center horizontally
    },
    logoImage: {
        // marginLeft: 100,
        width: 170, // Updated dimensions
        height: 40, // Updated dimensions
        // resizeMode: 'contain',
    },
    logoText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    boldIcon: {
        marginTop: 5,
        marginRight: -5,
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
        width: 80,
        height: 80,
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
        // borderWidth: 10,
        // borderColor: '#ffffff',
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