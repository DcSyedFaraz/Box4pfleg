import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepIndicator = ({ steps, currentStep }) => {
    return (
        <View style={styles.container}>
            {steps.map((step, index) => {
                const isActive = index + 1 === currentStep;
                return (
                    <View key={index} style={styles.stepContainer}>
                        <View
                            style={[
                                styles.circle,
                                isActive ? styles.activeCircle : styles.inactiveCircle,
                            ]}
                        >
                            <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>
                                {index + 1}
                            </Text>
                        </View>
                        {index !== steps.length - 1 && <View style={styles.line} />}
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    activeCircle: {
        backgroundColor: '#4caf50', // Green for active
        borderColor: '#4caf50',
    },
    inactiveCircle: {
        backgroundColor: '#ffffff', // White for inactive
        borderColor: '#1e3a8a', // Blue border
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeText: {
        color: '#ffffff', // White text for active
    },
    inactiveText: {
        color: '#1e3a8a', // Blue text for inactive
    },
    line: {
        width: 40,
        height: 2,
        backgroundColor: '#1e3a8a', // Blue for the connecting line
    },
});

export default StepIndicator;
