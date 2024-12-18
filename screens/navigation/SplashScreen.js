import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const initializeApp = async () => {
            // Simulate initialization tasks (e.g., API calls, data fetching)
            await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

            // Navigate to Home after initialization
            navigation.replace('Home');
        };

        initializeApp();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/splash.png')}
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