import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path, Circle } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Tab = createBottomTabNavigator();


const Last = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/Last.png')} />
            {/* Logo */}



            {/* Text Content */}
            <View style={styles.containers}>

                <Text style={styles.title}>Pflege leicht gemacht – Ihre Unterstützung zu Hause</Text>
                <Text style={styles.subtitle}>
                    Einfach einloggen, Pflegehilfsmittel bestellen oder Ihre Boxen individuell anpassen – schnell und unkompliziert.
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.loginButton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.registerButtonText}>Registrieren</Text>
                        </TouchableOpacity> */}
                </View>
                <TouchableOpacity onPress={() => navigation.replace('Tour')}>

                    <Text style={styles.tourLink}>Machen Sie eine Tour</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Last

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        // paddingHorizontal: 20,
        overflow: 'hidden',
    },
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    image: {
        marginBottom: 40,
        width: '100%',
        height: '59%',
        resizeMode: 'fit',
    },
    // iconContainer: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     // marginBottom: 30,
    // },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1F41BB',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666666',
        marginBottom: 20,
        lineHeight: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    loginButton: {
        flex: 1,
        backgroundColor: '#1E3A8A',
        paddingVertical: 10,
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
    },
    registerButton: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1E3A8A',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    registerButtonText: {
        color: '#1E3A8A',
    },
    tourLink: {
        fontSize: 14,
        color: '#1E3A8A',
        textDecorationLine: 'underline',
    },
})