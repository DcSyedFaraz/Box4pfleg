import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
    ScrollView,
    Dimensions,
} from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused1, setIsFocused1] = useState(false);


    const handleLogin = () => {
        // Handle login logic here
        navigation.replace('Home');
        // Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
    };

    return (

        // <KeyboardAwareScrollView>
        // <ScrollView>  

        <View style={styles.container}>
            <Image
                source={require('../../assets/bgimage.png')} // Replace with your image path
                style={styles.backgroundImage}
            />

            <View style={{ alignItems: 'center', width: '100%' }}>

                <Text style={styles.headerText}>Mitglieder-Login</Text>
                <Text style={styles.subHeaderText}>Bereits Mitglied?</Text>

                <TextInput
                    style={[
                        styles.input,
                        isFocused && { borderColor: '#224184', borderWidth: 2 }, // Change border color on focus
                    ]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Versichertennummer"
                    placeholderTextColor="#B0B0B0"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={[
                        styles.input,
                        isFocused1 && { borderColor: '#224184', borderWidth: 2 }, // Change border color on focus
                    ]}
                    onFocus={() => setIsFocused1(true)}
                    onBlur={() => setIsFocused1(false)}
                    placeholder="Postleitzahl der versicherten Person"
                    placeholderTextColor="#B0B0B0"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity activeOpacity='0.1' style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Anmelden</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Pflegebox bestellen und Zugang erhalten
                </Text>
            </View>

            <View style={styles.socialcontainer}>

                <Text style={styles.socialText}>
                    Folgen Sie uns auf:
                </Text>
                <View style={styles.socialIcons}>
                    <Image
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/0f8a/382d/456a9e0744f2cc250fbbfbfe4c78df1b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eyxJBAdKP9wqZya3Y-drCuqL7Ds7LeGGRepjMLW5Zf8~ECHgZULBZI-c4Pmlns37ml-OSXzErCh0m43wXFcdVrK9NddsDBODszZVB3XKCoeoKJd69FHOtXtLhotlr56PdmCWnw73G0p8-2FAuErsYb3cygIMjZR7wxWfv--ghBp8fgzdoRegKRgamudMDtDbQ-IHpVXaWzMTYxVAgLXzz6xB70doeoEb1ohqJM2YK4SHZ7S06SxNLb2-ldRICaR~DkOeN57RYOs5TvIOEFB0pmPYLTxtsvjiwWfB~VsNy8IdOMsVYpjq4EX3W1z3yBFha85OiHQ20tg3R22UOy8ZJA__' }}
                        style={styles.icon}
                    />
                    <Image
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/0578/af45/894bf0e83829aefb9f52570279e6715b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPvQ1bnllBsDjeDiZWrvyERZU920hLx8i1rljH5l8P8hKdFHRzJ2c3PfGPt0j5WPJmgy67rKjEiSiSYCG7cpvFwem6~Q0sanmkLiWxljzfqGdZAZt~VRFKKRFDBHDflsEauKuPogyNtoVI9wDjfFp5VIjRv7atK0PY02he~WwNIOCstcfzdblN4pv~mw8Pj2lVOZCwcP2uHJKMnWpaVkhnaf4JNu-iRoshfk-RyDLfErf~yzGZTuXllk06Zw~JMAf5RAhUvA7pyHeLWXU7Eozio8r4jEoFrNFIR4DtII9NhYt1EsKREyVfQectxbPXxDa1zVa-W6EHgBiNAYIpAr2g__' }}
                        style={styles.icon}
                    />
                    <Image
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/d491/898b/1fa9b5c4a06a8057fc815a1f8d0b7eb0?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=krz1caScIUAn~kuDutZ4q7QLkegGFP9qtZTJm-sKmlTl4Jw7Um0RtsNVnDjnyRow~3xuALPh4IkUH6QZ05iiLFavctPM4F5cRNoPhCFMJTtSoW7jvP8lyth34KY~-yz35a-zyQUmUn~qKmr4~AmYHQg4hdLWkNIe8dCwDmJCjjdV0PpovP2BxIAXw353EePck58KlHLw6rdEJvN4KInqA8w7sLilKvybpC1PhNwDX6k7c02BDc2WPUk5yE7NDL4zqUFPCxFrpUerA0MJ-vkODxJ-k2Cunt4w61CcHvVxlR-oXG~nS9lWy4hL5YipU2~AQx4Idb8LcVVX~LLsKN7LCw__' }}
                        style={styles.icon}
                    />
                </View>
            </View>
        </View>
        // </ScrollView>
        // {/* </KeyboardAwareScrollView> */}
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        bottom: -65,
        right: -20,
        width: 200, // Adjust size as needed
        height: 400, // Adjust size as needed
        resizeMode: 'contain',
    },

    container: {
        // flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 40
    },
    headerText: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 10,
        // color: '#000',
        color: '#224184',
    },
    subHeaderText: {
        fontSize: 26,
        // color: '#666',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 70,
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#CCC',

    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#224184',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 20,
    },
    socialText: {
        color: '#1F41BB',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '45%',
    },
    socialcontainer: {
        // position: 'absolute',
        // bottom: 20, // Distance from the bottom of the screen
        alignSelf: 'center',

    },

    icon: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
    },
});

export default LoginScreen;
