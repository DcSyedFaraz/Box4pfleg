import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Form = () => {
    // State for each step's data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        postalCode: '',
        city: '',
        recipientType: '',
    });

    // State for errors
    const [errors, setErrors] = useState({});
    const [checked, setChecked] = useState('Frau');


    // Validation for Step 1
    const validateStep1 = () => {
        const newErrors = {};
        // if (!formData.firstName) newErrors.firstName = 'First name is required';
        // if (!formData.lastName) newErrors.lastName = 'Last name is required';
        // if (!formData.street) newErrors.street = 'Street is required';
        // if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
        // if (!formData.city) newErrors.city = 'City is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // If no errors, return true
    };

    // Validation for Step 2
    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.recipientType) newErrors.recipientType = 'Please select a recipient type';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // If no errors, return true
    };

    // Submit the form
    const handleSubmit = () => {
        Alert.alert('Form Submitted!', JSON.stringify(formData, null, 2));
    };
    const progressStepsStyle = {
        activeStepIconBorderColor: '#224184',
        activeLabelColor: '#224184',
        activeStepNumColor: 'white',
        activeStepIconColor: '#224184',
        completedStepIconColor: '#224184',
        // disabledStepIconColor: 'white',
        disabledStepNumColor: '#224184',
        completedStepIconColor: '#4bb543',
        completedProgressBarColor: '#4bb543',
        // activeLabelFontSize: 18,
    };
    return (
        <View style={styles.container}>
            <ProgressSteps
                {...progressStepsStyle}
                style={styles.steps}
            >
                {/* Step 1: Personal Information */}
                <ProgressStep
                    label="Step 1"
                    onNext={validateStep1}
                    errors={Object.keys(errors).length > 0}
                >
                    <View style={styles.stepContainer}>
                        <Text style={styles.label}>Anrede</Text>
                        <View style={styles.radioGroup}>
                            <TouchableOpacity style={styles.radioButton} onPress={() => setChecked('Frau')}>
                                <RadioButton
                                    value="Frau"
                                    status={checked === 'Frau' ? 'checked' : 'unchecked'}
                                    theme={color => 'green'} // Customize label color
                                    color="#224184" // Customize selected color
                                />
                                <Text style={styles.radioText}>Frau</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.radioButton} onPress={() => setChecked('Herr')}>
                                <RadioButton
                                    value="Herr"
                                    status={checked === 'Herr' ? 'checked' : 'unchecked'}

                                    color="#224184"
                                />
                                <Text style={styles.radioText}>Herr</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.radioButton} onPress={() => setChecked('Divers')}>
                                <RadioButton
                                    value="Divers"
                                    status={checked === 'Divers' ? 'checked' : 'unchecked'}

                                    color="#224184"
                                />
                                <Text style={styles.radioText}>Divers</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.firstName}
                            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
                        />
                        {errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

                        <Text style={styles.label}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.lastName}
                            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                        />
                        {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

                        <Text style={styles.label}>Street</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.street}
                            onChangeText={(text) => setFormData({ ...formData, street: text })}
                        />
                        {errors.street && <Text style={styles.error}>{errors.street}</Text>}

                        <Text style={styles.label}>Postal Code</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.postalCode}
                            onChangeText={(text) => setFormData({ ...formData, postalCode: text })}
                        />
                        {errors.postalCode && <Text style={styles.error}>{errors.postalCode}</Text>}

                        <Text style={styles.label}>City</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.city}
                            onChangeText={(text) => setFormData({ ...formData, city: text })}
                        />
                        {errors.city && <Text style={styles.error}>{errors.city}</Text>}
                    </View>
                </ProgressStep>

                {/* Step 2: Recipient Information */}
                <ProgressStep
                    // label="Step 2"
                    onNext={validateStep2}
                    previousBtnText="Back"
                    errors={Object.keys(errors).length > 0}
                >
                    <View style={styles.stepContainer}>
                        <Text style={styles.label}>Who are you applying for?</Text>
                        <TouchableOpacity
                            style={[
                                styles.radioButton,
                                formData.recipientType === 'Self' && styles.radioSelected,
                            ]}
                            onPress={() => setFormData({ ...formData, recipientType: 'Self' })}
                        >
                            <Text style={styles.radioText}>For Myself</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.radioButton,
                                formData.recipientType === 'Other' && styles.radioSelected,
                            ]}
                            onPress={() => setFormData({ ...formData, recipientType: 'Other' })}
                        >
                            <Text style={styles.radioText}>For Someone Else</Text>
                        </TouchableOpacity>
                        {errors.recipientType && <Text style={styles.error}>{errors.recipientType}</Text>}
                    </View>
                </ProgressStep>

                {/* Step 3: Summary */}
                <ProgressStep
                    // label="Step 3"
                    finishBtnText="Submit"
                    onSubmit={handleSubmit}
                >
                    <View style={styles.stepContainer}>
                        <Text style={styles.summaryTitle}>Summary</Text>
                        <Text>First Name: {formData.firstName}</Text>
                        <Text>Last Name: {formData.lastName}</Text>
                        <Text>Street: {formData.street}</Text>
                        <Text>Postal Code: {formData.postalCode}</Text>
                        <Text>City: {formData.city}</Text>
                        <Text>Recipient Type: {formData.recipientType}</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    stepContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    steps: {
        backgroundColor: 'red',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    radioButton: {
        borderWidth: 1,
        borderColor: '#9bd6f0',
        backgroundColor: '#f0f9ff',
        color: '#224184',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioSelected: {
        borderColor: '#4CAF50',
    },
    radioText: {
        color: '#f0f9ff',
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioText: {
        fontSize: 16,
    },
});

export default Form;
