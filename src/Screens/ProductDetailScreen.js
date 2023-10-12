import React from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{marginTop:20}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:10}}>
      <View>
      <Text style={{fontSize:18,fontWeight:'800',color:'#4c1d95'}}>{product.title}</Text>
      <Text>{product.brand}</Text>
      </View>
      <View>
      <Text style={{color:'black'}}>⭐{product.rating}</Text>
      </View>
      </View>
      <Text style={{fontSize:18,color:'black',marginLeft:20,marginTop:10}}>Price: ${product.price}</Text>
      <Text style={{fontSize:18,color:'black',marginLeft:20,marginTop:10}}>Description: </Text>
      <Text style={{marginLeft:20,marginTop:10,marginRight:10}}>{product.description}</Text>
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
    width:"90%",
    height:200,
    borderRadius:10
  },
});
export default ProductDetailScreen;
