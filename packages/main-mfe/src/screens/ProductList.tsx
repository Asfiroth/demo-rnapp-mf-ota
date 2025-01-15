import React from 'react';
import { View, Text, Button, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ProductListScreenNavigationProp } from '../types/navigation';

type Props = {
    navigation: ProductListScreenNavigationProp;
};

type Product = {
    id: string;
    name: string;
    description: string;
};

const products: Product[] = [
    { id: '1', name: 'Product 1', description: 'Description for Product 1' },
    { id: '2', name: 'Product 2', description: 'Description for Product 2' },
    { id: '3', name: 'Product 3', description: 'Description for Product 3' },
    { id: '4', name: 'Product 4', description: 'Description for Product 4' },
];

const ProductListScreen = ({ navigation }: Props) => {
    const renderItem = ({ item }: { item: Product }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
        >
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                ListHeaderComponent={<Text style={styles.title}>Product List</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    productItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});

export default ProductListScreen;