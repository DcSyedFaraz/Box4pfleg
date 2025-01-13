import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import RadioButtons from './RadioButton';
import { useSelector } from 'react-redux';

const Form = () => {
    const products = useSelector((state) => state.products.products);
    const selectedProducts = products.filter(product => product.quantity > 0);

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.uri }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>Individuelle Pflegebox → {item.name}</Text>
                <Text style={styles.productQuantity}>x {item.quantity}</Text>
            </View>
        </View>
    );
    // State for each step's data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        postalCode: '',
        city: '',
        recipientType: '',
        salutation: 'Frau', // Added salutation to formData
    });

    // State for errors
    const [errors, setErrors] = useState({});

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
        // if (!formData.recipientType) newErrors.recipientType = 'Please select a recipient type';

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
        completedStepIconColor: '#4bb543',
        completedProgressBarColor: '#4bb543',
        disabledStepNumColor: '#224184',
    };

    return (
        <View style={styles.container}>
            <ProgressSteps
                {...progressStepsStyle}
            // style={styles.progressSteps}
            >
                {/* Step 1: Personal Information */}
                <ProgressStep
                    label="Personal Info"
                    onNext={validateStep1}
                    errors={Object.keys(errors).length > 0}
                    nextBtnStyle={styles.nextbutton}
                    nextBtnTextStyle={styles.buttonText}
                >
                    <View style={styles.stepContainer}>
                        <Text style={styles.heading}>insured person</Text>
                        <Text style={styles.label}>Anrede</Text>
                        <View style={styles.radioGroup}>
                            <RadioButtons
                                label="Frau"
                                selected={formData.salutation === 'Frau'}
                                onPress={() => setFormData({ ...formData, salutation: 'Frau' })}
                            />
                            <RadioButtons
                                label="Herr"
                                selected={formData.salutation === 'Herr'}
                                onPress={() => setFormData({ ...formData, salutation: 'Herr' })}
                            />
                            <RadioButtons
                                label="Divers"
                                selected={formData.salutation === 'Divers'}
                                onPress={() => setFormData({ ...formData, salutation: 'Divers' })}
                            />
                        </View>

                        <View style={styles.fullWidth}>
                            <Text style={styles.label}>Title</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.title}
                                onChangeText={(text) => setFormData({ ...formData, title: text })}
                                placeholder="Enter the title"
                                placeholderTextColor="#999"
                            />
                            {errors.title && <Text style={styles.error}>{errors.title}</Text>}
                        </View>

                        {/* Two columns for First Name and Last Name */}
                        <View style={styles.row}>
                            <View style={styles.halfWidth}>
                                <Text style={styles.label}>First Name</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData.firstName}
                                    onChangeText={(text) => setFormData({ ...formData, firstName: text })}
                                    placeholder="Enter your first name"
                                    placeholderTextColor="#999"
                                />
                                {errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}
                            </View>
                            <View style={styles.halfWidth}>
                                <Text style={styles.label}>Last Name</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData.lastName}
                                    onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                                    placeholder="Enter your last name"
                                    placeholderTextColor="#999"
                                />
                                {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
                            </View>
                        </View>

                        {/* Full-width input for Street */}
                        <View style={styles.fullWidth}>
                            <Text style={styles.label}>Street</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.street}
                                onChangeText={(text) => setFormData({ ...formData, street: text })}
                                placeholder="Enter your street"
                                placeholderTextColor="#999"
                            />
                            {errors.street && <Text style={styles.error}>{errors.street}</Text>}
                        </View>

                        {/* Two columns for Postal Code and City */}
                        <View style={styles.row}>
                            <View style={styles.halfWidth}>
                                <Text style={styles.label}>Postal Code</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData.postalCode}
                                    onChangeText={(text) => setFormData({ ...formData, postalCode: text })}
                                    placeholder="Enter your postal"
                                    placeholderTextColor="#999"
                                // keyboardType="numeric"
                                />
                                {errors.postalCode && <Text style={styles.error}>{errors.postalCode}</Text>}
                            </View>
                            <View style={styles.halfWidth}>
                                <Text style={styles.label}>City</Text>
                                <TextInput
                                    style={styles.input}
                                    value={formData.city}
                                    onChangeText={(text) => setFormData({ ...formData, city: text })}
                                    placeholder="Enter your city"
                                    placeholderTextColor="#999"
                                />
                                {errors.city && <Text style={styles.error}>{errors.city}</Text>}
                            </View>
                        </View>

                        <Text style={styles.heading}>Für wen beantragen Sie die Pflegebox?</Text>
                        <View>
                            <RadioButtons
                                label="Ich beantrage die Pflegebox für mich persönlich."
                                selected={formData.recipientType === 'Ich beantrage die Pflegebox für mich persönlich.'}
                                onPress={() => setFormData({ ...formData, recipientType: 'Ich beantrage die Pflegebox für mich persönlich.' })}
                            />
                            <RadioButtons
                                label="Ich beantrage die Pflegebox für einen Angehörigen oder eine Person die ich betreue."
                                selected={formData.recipientType === 'Ich beantrage die Pflegebox für einen Angehörigen oder eine Person die ich betreue.'}
                                onPress={() => setFormData({ ...formData, recipientType: 'Ich beantrage die Pflegebox für einen Angehörigen oder eine Person die ich betreue.' })}
                            />
                        </View>
                    </View>
                </ProgressStep>

                {/* Step 2: Recipient Information */}
                <ProgressStep
                    label="Recipient Info"
                    onNext={validateStep2}
                    previousBtnText="Back"
                    nextBtnStyle={styles.nextbutton}
                    nextBtnTextStyle={styles.buttonText}
                    previousBtnStyle={styles.button}
                    previousBtnTextStyle={styles.buttonText}
                    errors={Object.keys(errors).length > 0}
                >
                    <View style={styles.stepContainer}>
                        <Text style={styles.heading}>Angaben zur versicherten Person</Text>

                        {/* Date of Birth */}
                        <View style={styles.fullWidth}>
                            <Text style={styles.label}>Geburtsdatum</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.birthDate}
                                onChangeText={(text) => setFormData({ ...formData, birthDate: text })}
                                placeholder="TT-MM-JJJJ"
                                placeholderTextColor="#999"
                            />
                            {errors.birthDate && <Text style={styles.error}>{errors.birthDate}</Text>}
                        </View>

                        {/* Insurance Type */}
                        <Text style={styles.label}>Angaben zur Krankenkasse/Pflegekasse</Text>
                        <View style={styles.radioGroup}>
                            <RadioButtons
                                label="gesetzlich versichert"
                                selected={formData.insuranceType === 'gesetzlich'}
                                onPress={() => setFormData({ ...formData, insuranceType: 'gesetzlich' })}
                            />
                            <RadioButtons
                                label="privat versichert"
                                selected={formData.insuranceType === 'privat'}
                                onPress={() => setFormData({ ...formData, insuranceType: 'privat' })}
                            />
                            <RadioButtons
                                label="Beihilfeberechtigt"
                                selected={formData.insuranceType === 'beihilfe'}
                                onPress={() => setFormData({ ...formData, insuranceType: 'beihilfe' })}
                            />
                            <RadioButtons
                                label="Orts-/Sozialamt"
                                selected={formData.insuranceType === 'sozialamt'}
                                onPress={() => setFormData({ ...formData, insuranceType: 'sozialamt' })}
                            />
                        </View>

                        {/* Insurance Provider and Number */}
                        <View style={styles.fullWidth}>
                            <Text style={styles.label}>Krankenkasse auswählen</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.insuranceProvider}
                                onChangeText={(text) => setFormData({ ...formData, insuranceProvider: text })}
                                placeholder="Ihre Krankenkasse"
                                placeholderTextColor="#999"
                            />
                        </View>
                        <View style={styles.fullWidth}>
                            <Text style={styles.label}>Versichertennummer</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.insuranceNumber}
                                onChangeText={(text) => setFormData({ ...formData, insuranceNumber: text })}
                                placeholder="Versichertennummer"
                                placeholderTextColor="#999"
                            />
                        </View>

                        {/* Care Level */}
                        <Text style={styles.label}>Welchen Pflegegrad hat die versicherte Person?</Text>
                        <View style={styles.radioGroup}>
                            <RadioButtons
                                label="Keinen"
                                selected={formData.careLevel === 'Keinen'}
                                onPress={() => setFormData({ ...formData, careLevel: 'Keinen' })}
                            />
                            {[1, 2, 3, 4, 5].map((level) => (
                                <RadioButtons
                                    key={level}
                                    label={`PG ${level}`}
                                    selected={formData.careLevel === `PG ${level}`}
                                    onPress={() => setFormData({ ...formData, careLevel: `PG ${level}` })}
                                />
                            ))}
                        </View>

                        {/* Existing Provider */}
                        <Text style={styles.label}>Besteht oder bestand eine Pflegehilfsmittel-Versorgung durch einen anderen Anbieter?</Text>
                        <View style={styles.radioGroup}>
                            <RadioButtons
                                label="Ja"
                                selected={formData.hasExistingProvider === true}
                                onPress={() => setFormData({ ...formData, hasExistingProvider: true })}
                            />
                            <RadioButtons
                                label="Nein"
                                selected={formData.hasExistingProvider === false}
                                onPress={() => setFormData({ ...formData, hasExistingProvider: false })}
                            />
                        </View>

                        {/* Bed Pads */}
                        <Text style={styles.label}>Ich möchte 3 wiederverwendbare Bettschutzeinlagen mit beantragen</Text>
                        <View style={styles.radioGroup}>
                            <RadioButtons
                                label="Ja, bitte mit beantragen"
                                selected={formData.requestBedPads === true}
                                onPress={() => setFormData({ ...formData, requestBedPads: true })}
                            />
                            <RadioButtons
                                label="Kein Interesse"
                                selected={formData.requestBedPads === false}
                                onPress={() => setFormData({ ...formData, requestBedPads: false })}
                            />
                        </View>

                        {/* Delivery Address */}
                        <Text style={styles.label}>Lieferadresse der Pflegehilfsmittel</Text>
                        <View style={styles.radioGroup}>
                            <RadioButtons
                                label="Versicherte Person"
                                selected={formData.deliveryAddress === 'insuredPerson'}
                                onPress={() => setFormData({ ...formData, deliveryAddress: 'insuredPerson' })}
                            />
                            <RadioButtons
                                label="Antragsteller"
                                selected={formData.deliveryAddress === 'applicant'}
                                onPress={() => setFormData({ ...formData, deliveryAddress: 'applicant' })}
                            />
                            <RadioButtons
                                label="Abweichende Lieferadresse"
                                selected={formData.deliveryAddress === 'other'}
                                onPress={() => setFormData({ ...formData, deliveryAddress: 'other' })}
                            />
                        </View>

                        {/* Application Receipt */}
                        <Text style={styles.label}>Wie möchten Sie Ihren Antrag erhalten?</Text>
                        <View style={styles.radioGroup}>
                            <RadioButtons
                                label="Per Post"
                                selected={formData.applicationReceipt === 'post'}
                                onPress={() => setFormData({ ...formData, applicationReceipt: 'post' })}
                            />
                            <RadioButtons
                                label="Per E-Mail"
                                selected={formData.applicationReceipt === 'email'}
                                onPress={() => setFormData({ ...formData, applicationReceipt: 'email' })}
                            />
                        </View>

                        {/* Awareness Source */}
                        <Text style={styles.label}>Wie sind Sie auf uns aufmerksam geworden?</Text>
                        <View style={styles.fullWidth}>
                            <TextInput
                                style={styles.input}
                                value={formData.awarenessSource}
                                onChangeText={(text) => setFormData({ ...formData, awarenessSource: text })}
                                placeholder="z.B. über Fachzeitschrift / Magazin"
                                placeholderTextColor="#999"
                            />
                        </View>
                    </View>


                </ProgressStep>

                {/* Step 3: Summary */}
                <ProgressStep
                    label="Summary"
                    finishBtnText="Submit"
                    previousBtnText="Back"
                    previousBtnStyle={styles.button}
                    previousBtnTextStyle={styles.buttonText}
                    nextBtnStyle={styles.nextbutton}
                    nextBtnTextStyle={styles.buttonText}
                    onSubmit={handleSubmit}
                >
                    <View style={styles.stepContainer}>
                        <Text style={styles.header}>Ihre Produktauswahl</Text>

                        <FlatList
                            data={selectedProducts}
                            renderItem={renderProduct}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.productList}
                            nestedScrollEnabled={true}
                        />

                        <View style={styles.termsContainer}>
                            <Checkbox
                                status={isChecked ? "checked" : "unchecked"}
                                onPress={handleCheckboxToggle}
                                color="#214184"
                            />
                            <Text style={styles.termsText}>
                                Mit Ihrer Bestellung erklären Sie sich mit unseren{' '}
                                <Text style={styles.link}>Allgemeinen Geschäftsbedingungen</Text>,{' '}
                                <Text style={styles.link}>Widerrufsbestimmungen</Text> und{' '}
                                <Text style={styles.link}>Datenschutzbestimmungen</Text> einverstanden. Hiermit bestätigen Sie, dass wir Ihnen im Rahmen der Pflegehilfsmittelpauschale monatlich Ihre benötigten Pflegehilfsmittel ausliefern.
                            </Text>
                        </View>

                        <Button
                            mode="contained"
                            onPress={handleSubmit}
                            style={styles.submitButton}
                            disabled={!isChecked}
                        >
                            Jetzt kostenlos beantragen
                        </Button>
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
    next: {
    },
    button: {
        position: 'absolute',
        bottom: 0,
        left: -53,     // Horizontal padding
        backgroundColor: '#002c77', // Blue background
        borderRadius: 25,           // Rounded corners
        paddingVertical: 10,        // Vertical padding
        paddingHorizontal: 20,
        marginLeft: 22,
        alignSelf: 'flex-end',        // Bottom margin
    },
    nextbutton: {
        position: 'absolute',
        bottom: 0,
        left: -53,     // Horizontal padding
        backgroundColor: '#002c77', // Blue background
        borderRadius: 25,           // Rounded corners
        paddingVertical: 10,        // Vertical padding
        paddingHorizontal: 20,
        marginLeft: 10,
        alignSelf: 'flex-end',        // Bottom margin
    },
    buttonText: {
        color: '#ffffff',           // White text
        fontSize: 16,               // Font size
        fontWeight: '600',          // Semi-bold text
        textTransform: 'capitalize' // Capitalized text
    },
    stepContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    fullWidth: {
        marginBottom: 16,
    },
    halfWidth: {
        width: '48%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#224184',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#224184',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        fontSize: 14,
        backgroundColor: '#fff',
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    radioGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Ensures items wrap to the next line if they don't fit
        // justifyContent: 'space-around',
        marginBottom: 15,
    },

    // radioGroup2: {
    //     flexDirection: 'column',
    //     justifyContent: 'space-between',
    //     marginBottom: 15,
    // },

    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryText: {
        fontSize: 16,
        marginBottom: 5,
    },
    // New
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#214184",
        textAlign: "center",
        marginBottom: 20,
    },
    productList: {
        marginBottom: 20,
    },
    productContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        flex: 1,
    },
    productQuantity: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#214184",
        marginLeft: 10,
    },
    termsContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 20,
    },
    termsText: {
        flex: 1,
        fontSize: 14,
        color: "#555",
    },
    link: {
        color: "#214184",
        textDecorationLine: "underline",
    },
    submitButton: {
        color: "#fff",
        backgroundColor: "#214184",
        paddingVertical: 10,
        borderRadius: 8,
    },
});

export default Form;
