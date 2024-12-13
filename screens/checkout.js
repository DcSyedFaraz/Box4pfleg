import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Checkout = () => {
    return (
        <View style={styles.mainScreen}>
            <Text>checkout</Text>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    mainScreen: {
        height: windowheight,
        width: windowWidth,
        backgroundColor: "green",
    }
})