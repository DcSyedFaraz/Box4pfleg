import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Login = () => {
    return (
        <View style={styles.mainScreen}>
            <Text>Login</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainScreen: {
        height: windowheight,
        width: windowWidth,
        backgroundColor: "orange",
    }
})