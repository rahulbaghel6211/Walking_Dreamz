import React from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <Text>Name: {product.title}</Text>
      <Text>Description: {product.description}</Text>
      <Text>Price: ${product.price}</Text>
      <Text>Brand: {product.brand}</Text>
      <Text>Category:{product.category}</Text>
      <Text>Rating:{product.rating}</Text>
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
  },
  productContainer: {
    alignItems: 'center',
  },
  productItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 300,
    height:200,
    borderRadius:10
  },
});
export default ProductDetailScreen;
