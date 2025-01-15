import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ProductDetailScreenNavigationProp, ProductDetailScreenRouteProp } from '../types/navigation';

type Props = {
    navigation: ProductDetailScreenNavigationProp;
    route : ProductDetailScreenRouteProp;
};

export default function ProductDetailScreen({ route, navigation }: Props) {
    const { productId } = route.params;
  
    // Example product details (replace with dynamic data from an API or state)
    const product = {
      id: productId,
      name: `Product ${productId}`,
      description: `This is a detailed description of Product ${productId}. It’s crafted with high quality materials and designed for your comfort and style.`,
      price: `$${(parseInt(productId) * 10).toFixed(2)}`,
      image: 'https://via.placeholder.com/300',
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={{ uri: product.image }} style={styles.image} />
  
          <View style={styles.details}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
  
          <TouchableOpacity style={styles.button} onPress={() => alert('Added to cart!')}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
  
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      width: '100%',
      elevation: 5, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    details: {
      padding: 20,
    },
    productName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4CAF50',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#666',
      lineHeight: 22,
    },
    button: {
      backgroundColor: '#4CAF50',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      margin: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    backButton: {
      marginTop: 20,
    },
    backButtonText: {
      color: '#4CAF50',
      fontSize: 16,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
  });