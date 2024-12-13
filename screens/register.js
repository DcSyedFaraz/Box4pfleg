import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Register = () => {
    return (
        <View style={styles.mainScreen}>
            <Text>Register</Text>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    mainScreen: {
        height: windowheight,
        width: windowWidth,
        backgroundColor: "black",
    }
})