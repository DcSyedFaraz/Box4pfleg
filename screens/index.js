import React from 'react';
import testSvg from '../assets/Second.svg';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Willkommen</Text>
                <Text style={styles.nameText}>Dani Martinez</Text>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual profile image URL
                    style={styles.profileImage}
                />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    {/* <SvgXml
                        width="100%"
                        height="100%"
                        xml={testSvg}
                    /> */}
                    <testSvg width={120} height={40} />

                    <Text style={styles.menuText}>Verwalten Abonnement</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image source={require('../assets/First.png')} style={styles.icon} />
                    <Text style={styles.menuText}>Pflegebox bestellen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image source={require('../assets/First.png')} style={styles.icon} />
                    <Text style={styles.menuText}>Häufig gestellte Fragen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>

                    <Image source={require('../assets/First.png')} style={styles.icon} />
                    <Text style={styles.menuText}>Kontakt</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fc',
        alignItems: 'center',
        paddingTop: 50,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    nameText: {
        fontSize: 18,
        color: '#555',
        marginTop: 5,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 15,
    },
    menuContainer: {
        width: '90%',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Index;
