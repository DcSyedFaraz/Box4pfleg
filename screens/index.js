import React from 'react';
import testSvg from '../assets/Second.svg';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Index1 from '../assets/SVG/index1';
import Index2 from '../assets/SVG/index2';
import Index3 from '../assets/SVG/index3';
import Index4 from '../assets/SVG/index4';

const Index = () => {
    return (
        <View style={styles.container}>
            {/* <Index1 width="62" height="62" /> */}
                <Image
                    source={require('../assets/bgimage.png')} // Replace with the actual background image URL
                    style={styles.backgroundImage}
                />
            <View style={styles.header}>
                <View style={styles.overlay}>
                    <View>

                        <Text style={styles.welcomeText}>Willkommen</Text>
                        <Text style={styles.nameText}>Dani Martinez</Text>
                    </View>
                    <Image
                        source={require('../assets/profileimage.png')} // Replace with the actual profile image URL
                        style={styles.profileImage}
                    />
                </View>
            </View>

            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.icon}>
                        <Index1 width="62" height="62" />
                    </Text>
                    <Text style={styles.itemText}>Verwalten Abonnement</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.icon}>
                        <Index2 width="62" height="62" />
                    </Text>
                    <Text style={styles.itemText}>Pflegebox bestellen</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.icon}><Index3 width="62" height="62" /></Text>
                    <Text style={styles.itemText}>Häufig gestellte Fragen</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.icon}><Index4 width="62" height="62" /></Text>
                    <Text style={styles.itemText}>Kontakt</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        alignItems: 'center',
        padding: 20,
        position: 'relative',

    },
    header: {
        width: '100%',
        height: 200,
        // marginBottom: 30,
    },
    backgroundImage: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 10,
    },
    overlay: {
        marginTop: 60,
        marginLeft: 60,
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        padding: 40, // Adding padding to create space between border and image
        backgroundColor: 'balck', // Ensures the border does not cover the image
        borderWidth: 10,
        borderColor: 'white',
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 18,
        // fontWeight: 'bold',
        // color: '#333',
        // backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    nameText: {
        fontSize: 16,
        color: '#2d4e8e',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    gridContainer: {
        marginTop: 60,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        width: '48%',
        backgroundColor: '#FFF',
        padding: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    icon: {
        fontSize: 24,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
    },

});

export default Index;
