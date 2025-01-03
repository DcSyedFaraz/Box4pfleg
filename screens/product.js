import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
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
        const roundedProgress = Math.round(progressValue * 100); // Round to the nearest integer

        setProducts(updatedProducts);
        setProgress(roundedProgress / 100);
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
                        <Card.Content>
                            <View style={styles.header}>
                                <Text style={styles.percentage}>{product.percentage}%</Text>
                                <Text style={styles.title}>{product.name}</Text>
                                <Text style={styles.subtitle}>{`Inhalt pro Packung: ${product.quantity} Stück`}</Text>
                            </View>
                            <View style={styles.controls}>
                                <IconButton
                                    icon="minus"
                                    onPress={() => handleRemove(product.id)}
                                    style={styles.iconButton}
                                    size={24}
                                />
                                <Text style={styles.quantity}>{product.quantity}</Text>
                                <IconButton
                                    icon="plus"
                                    onPress={() => handleAdd(product.id)}
                                    style={styles.iconButton}
                                    size={24}
                                />
                            </View>
                        </Card.Content>
                    </Card>

                ))}
            </ScrollView>
            <Button
                mode="contained"
                onPress={() => alert('Pflegepaket gespeichert!')}
                style={styles.button}
            >
                Pflegepaket abschließen
            </Button>
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
    header: { fontWeight: 'bold', color: '#2d4e8e' },
    blackheader: { fontWeight: 'bold', marginBottom: 10 },
    subheader: { marginBottom: 20, color: '#555' },
    progressBar: { marginBottom: 10, height: 8, borderRadius: 5 },
    progressText: { textAlign: 'center', marginVertical: 10, fontSize: 16 },
    scrollView: { flex: 1, marginTop: 10 },
    card: {
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    iconButton: {
        backgroundColor: '#ddd',
        borderRadius: 5,
        padding: 5,
    },
    quantity: {
        fontSize: 18,
        minWidth: 30,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
    },
});

export default Product;
