import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Home = () => {
    return (
        <View style={styles.mainScreen}>
            <Text>home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainScreen: {
        height: windowheight,
        width: windowWidth,
        backgroundColor: "red",
    }
})