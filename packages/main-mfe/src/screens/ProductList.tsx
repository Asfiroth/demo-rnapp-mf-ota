import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import { ProductListScreenNavigationProp } from '../types/navigation';

type Props = {
    navigation: ProductListScreenNavigationProp;
};

const ProductListScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Product List</Text>
                <Button title="Product Detail" onPress={() => navigation.navigate('ProductDetail', { productId: '1' })} />
            </View>
        </SafeAreaView>
    );
}

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

export default ProductListScreen;