import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { ProgressBar, Text, Button, Card, IconButton } from 'react-native-paper';

const Product = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Bettschutzeinlage', percentage: 31, quantity: 0, max: 5 },
        { id: 2, name: 'Desinfektionstücher', percentage: 18, quantity: 0, max: 5 },
        { id: 3, name: 'Einmalhandschuhe', percentage: 24, quantity: 0, max: 5 },
        { id: 4, name: 'FFP2 Masken', percentage: 11, quantity: 0, max: 5 },
    ]);
    const [progress, setProgress] = useState(0);

    const handleAdd = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id && product.quantity < product.max
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );
        updateProgress(updatedProducts);
    };

    const handleRemove = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id && product.quantity > 0
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        updateProgress(updatedProducts);
    };

    const updateProgress = (updatedProducts) => {
        const totalPercentage = updatedProducts.reduce(
            (sum, product) => sum + product.percentage * product.quantity,
            0
        );
        const maxPercentage = 100;
        const progressValue = Math.min(totalPercentage / maxPercentage, 1);
        const roundedProgress = Math.round(progressValue * 100);

        setProducts(updatedProducts);
        setProgress(roundedProgress / 100); // Ensure progress is still a float between 0 and 1
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
                                        source={{ uri: 'https://box4pflege.de/wp-content/uploads/2022/05/Icons_Bed-Protection-Pads-1-150x150.png' }} // Replace with your image path
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
                    onPress={() => alert('Pflegepaket gespeichert!')}
                    style={[styles.button, { backgroundColor: progress >= 0.6 ? '#4CAF50' : '#D3E3F5' }]}

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
        marginRight: 10,
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
