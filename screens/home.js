import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Home = () => {
    console.log('CustomTabBar');

    return (
        <View style={styles.mainScreen}>
            <Text>homesssssssssssssssssssssssssss</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainScreen: {
        height: windowheight,
        width: windowWidth,
        backgroundColor: "yellow",
    }
})