import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import { ProductDetailScreenNavigationProp, ProductDetailScreenRouteProp } from '../types/navigation';

type Props = {
    navigation: ProductDetailScreenNavigationProp;
    route : ProductDetailScreenRouteProp;
};

const ProductDetailScreen = ({ navigation, route }: Props) => {
    const { productId } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Product Detail</Text>
                <Text>Product ID: {productId}</Text>
                <Button title="Back to Product List" onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default ProductDetailScreen;