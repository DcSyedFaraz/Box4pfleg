import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { ProgressBar, Text, Button, Card, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from './store/progressSlice'; // Adjust the path as necessary
import { addProduct, removeProduct } from './store/productsSlice';

const Product = ({ navigation }) => {
    const dispatch = useDispatch();
    const progress = useSelector((state) => state.progress.value); // Access progress from Redux

    const products = useSelector((state) => state.products.products); // Access products from Redux


    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    useEffect(() => {
        updateProgress(products);
    }, [products]);

    // Handlers for adding and removing products
    const handleAdd = (id) => {
        dispatch(addProduct(id));
    };

    const handleRemove = (id) => {
        dispatch(removeProduct(id));
    };

    const updateProgress = (currentProducts) => {
        const totalPercentage = currentProducts.reduce((sum, product) => {
            const percentage = parseFloat(product.percentage) || 0;
            const quantity = parseInt(product.quantity, 10) || 0;
            return sum + percentage * quantity;
        }, 0);

        const maxPercentage = 100;
        const clampedTotal = clamp(totalPercentage, 0, maxPercentage);
        const progressValue = parseFloat((clampedTotal / maxPercentage).toFixed(2));

        console.log('Progress Value:', progressValue);
        dispatch(setProgress(progressValue));
    };

    const handleLogin = () => {
        // Handle login logic here
        console.log('Form');

        navigation.navigate('MultiStepForm');
        // Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
    };


    return (
        <View style={styles.container}>
            <Text variant="titleLarge" style={styles.header}>
                Wählen Sie jetzt
            </Text>
            <Text variant="titleLarge" style={styles.blackheader}>
                Ihre Pflegeprodukte
            </Text>
            <Text variant="bodyMedium" style={styles.subheader}>
                Stellen Sie sich Ihr individuelles Pflegepaket ganz nach Ihren Bedürfnissen zusammen. Auf Wunsch können Sie Ihre Produkte jeden Monat einfach wechseln.
            </Text>

            <Text style={styles.title}>Ihre ganz persönliches Pflegepaket:</Text>
            <View style={styles.progressContainer}>
                <Text style={[
                    styles.percentageText,
                    { color: progress >= 0.6 ? '#4CAF50' : '#D3E3F5' }, // Conditional color
                ]} > {Math.round(progress * 100)}%
                </Text>
            </View>
            <ProgressBar
                progress={progress}
                color="#4CAF50"
                style={styles.progressBar}
            />
            <Text style={styles.subText}>
                {`${Math.round(progress * 100)}% des Pflegepakets erreicht (60% mind. erforderlich)`}
            </Text>

            <ScrollView style={styles.scrollView}>
                {products.map((product) => (
                    <Card key={product.id} style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.percentageContainer}>
                                <Text style={styles.percentage}>{Math.round(product.percentage)}%</Text>
                                <View style={styles.imageWrapper}>
                                    <Image
                                        source={{ uri: product.uri }} // Replace with your image path
                                        style={styles.productImage}
                                        resizeMode="contain"
                                    />
                                </View>
                            </View>

                            <View style={styles.textContainer}>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.subtitle}>
                                    {`Inhalt pro Packung: ${product.quantity} Stück`}
                                </Text>
                            </View>
                            <View style={styles.controls}>
                                <IconButton
                                    icon="minus"
                                    iconColor="white"
                                    onPress={() => handleRemove(product.id)}
                                    size={10}
                                    color="#214184"
                                    style={styles.iconButton}
                                />
                                <Text style={styles.quantity}>{product.quantity}</Text>
                                <IconButton
                                    icon="plus"
                                    iconColor="white"
                                    onPress={() => handleAdd(product.id)}
                                    size={10}
                                    color="#214184"
                                    style={styles.iconButton}
                                />
                            </View>
                        </Card.Content>
                    </Card>


                ))}
                <Button
                    mode="contained"
                    onPress={handleLogin}
                    style={[styles.button, { backgroundColor: progress >= 0.6 ? '#4CAF50' : '#D3E3F5' }]}
                    disabled={progress < 0.6}

                >
                    Pflegepaket abschließen
                </Button>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        // background: //#region ;
        color: '#214184',
        marginBottom: 8,
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 5,
    },
    percentageText: {
        fontSize: 28,
        color: '#D3E3F5',
        position: 'absolute',
        right: 0,
        top: -35,
    },
    progressBar: {
        marginBottom: 10,
        height: 8,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#E0E0E0',
    },
    subText: {
        fontSize: 12,
        color: '#6E6E6E',
        marginTop: 5,
    },
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    header: { fontWeight: 'bold', color: '#2d4e8e' },
    blackheader: { fontWeight: 'bold', marginBottom: 10 },
    subheader: { marginBottom: 20, color: '#555' },
    progressBar: { marginBottom: 10, height: 8, borderRadius: 5 },
    progressText: { textAlign: 'center', marginVertical: 10, fontSize: 16 },
    scrollView: { flex: 1, marginTop: 10 },
    card: {
        marginVertical: 4,
        borderRadius: 12,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        padding: 5,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    percentageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginBottom: 10,
        width: 60,
    },
    percentage: {
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#E6F7FF',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3178C6',
        marginBottom: 4,
        marginRight: -10,
    },
    imageWrapper: {
        width: 40, // Adjust based on your image size
        height: 40, // Adjust based on your image size
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8, // Optional, for rounded edges
    },
    textContainer: {
        flex: 1,
        marginRight: 5,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#214184',
    },
    subtitle: {
        fontSize: 12,
        color: '#6E6E6E',
        marginTop: 4,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6F7FF',
        borderRadius: 30,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    iconButton: {
        marginHorizontal: 2,
        backgroundColor: '#214184',
        color: 'white',
    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#214184',
        marginHorizontal: 4,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        marginBottom: 100,
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
    },
});

export default Product;
