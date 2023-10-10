import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ProductManagementScreen = ({ navigation }) => {
  const [statistics, setStatistics] = useState({
    total: 0,
    products: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const productData = response.data;

      setStatistics({
        total: productData.total,
        products: productData.products,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <View style={styles.statistic}>
        <Text>Number of all products: {statistics.total}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.productContainer}>
        {statistics.products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productPrice}>Price: ${product.price}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetail', { product: product })}
            >
              <Text style={styles.viewDetailsButton}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statistic: {
    marginVertical: 10,
    marginLeft:50
  },
  productContainer: {
    alignItems: 'center',
  },
  productItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
  productImage: {
    width:300,
    height:200,
    borderRadius:10
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  viewDetailsButton: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 5,
    backgroundColor:'blue',
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:10
  },
});

export default ProductManagementScreen;
