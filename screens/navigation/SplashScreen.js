import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const initializeApp = async () => {
            const hasSeenTour = await AsyncStorage.getItem('hasSeenTour');
            // Simulate initialization tasks (e.g., API calls, data fetching)
            await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

            // Navigate to Home after initialization
            // Navigate based on whether the user has seen the tour
            if (hasSeenTour === 'true') {
                navigation.replace('Login');
                // navigation.replace('Tour');
            } else {
                navigation.replace('Tour'); // Redirect to tour screen
            }
        };

        initializeApp();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#486298" barStyle="light-content" />
            <Image
                source={require('../../assets/Splash1.png')}
                style={styles.logo}
                resizeMode="cover" // Use 'cover' to fill the screen
            />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F6D7A', // Customize your background color
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        ...StyleSheet.absoluteFillObject, // This will make the image fill the entire screen
        width: undefined, // Set width to undefined
        height: undefined, // Set height to undefined
    },
});