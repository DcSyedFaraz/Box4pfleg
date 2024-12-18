import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Homenew = () => {
    console.log('CustomTabBarsss');
    return (
        <View style={styles.mainScreen}>
            <Text>homenew</Text>
        </View>
    )
}

export default Homenew

const styles = StyleSheet.create({
    mainScreen: {
        height: windowheight,
        width: windowWidth,
        backgroundColor: "blue",
    }
})