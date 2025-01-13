import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const RadioButtons = ({ label, selected, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.container, selected && styles.containerSelected]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={[styles.radioCircle, selected && styles.radioSelected]}>
                {selected && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[styles.radioLabel, selected && styles.radioLabelSelected]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 17,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 8,
        marginRight: 8 ,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    containerSelected: {
        borderColor: '#a5c3e1',
        backgroundColor: '#ebf2f8',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#d2d6de',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: '#fff',
    },
    radioSelected: {
        borderColor: '#b0c8e0',
        backgroundColor: '#fff',
    },
    checkmark: {
        fontSize: 14,
        color: '#b0c8e0',
        fontWeight: 'bold',
    },
    radioLabel: {
        fontSize: 14,
        color: '#274182',
        textAlign: 'center',
    },
    radioLabelSelected: {
        color: '#274182',
        fontWeight: '600',
    },
});

export default RadioButtons;
