import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
// import AppNavigator from './navigation/navigation';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Home = () => {
    console.log('CustomTabBar');

    return (
        <View >
            <Text>homesssssssssssssssssssssssssss</Text>
            {/* <AppNavigator /> */}
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