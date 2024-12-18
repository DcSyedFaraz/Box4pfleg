import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Login from '../login';
import Ionicons from 'react-native-vector-icons/Ionicons'; // or use any icon library
import { useNavigation } from '@react-navigation/native';
import AppNavigator from '../navigation/navigation';



const Tab = createBottomTabNavigator();


const First = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>First</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Alert')}
            >
                <Ionicons
                    name="person-circle-outline"
                    size={28}

                />
                <Text>Account</Text>
            </TouchableOpacity>
            <AppNavigator />
        </View>
    )
}

export default First

const styles = StyleSheet.create({})