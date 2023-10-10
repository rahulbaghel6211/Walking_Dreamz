import React, { useEffect, useState } from 'react';
import { View, Text, Image ,TouchableOpacity,StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CategoryScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Initialize as an empty string
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCategories = () => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Categories:', data);
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchProducts = (category) => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Products:', data);
        setProducts(data.products);
        setLoading(false);
        setShowProducts(true);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = (itemValue) => {
    setSelectedCategory(itemValue);
    setShowProducts(false);
    fetchProducts(itemValue);
  };

  return (
    <View>
      <Text style={{marginLeft:10,fontSize:18,fontWeight:'800'}}>Select a Category:</Text>
      <View style={styles.pickerItem}>
      <Picker selectedValue={selectedCategory} onValueChange={handleCategoryChange}>
        {categories.map((category, index) => (
          <Picker.Item key={index} label={category} value={category} />
        ))}
      </Picker>
      </View>

      {loading ? (
        <Text>Loading...</Text>
      ) : showProducts ? (
        <View>
          <Text style={{fontSize:18,padding:10}}>Products for {selectedCategory}:</Text>
          {products.map((product, index) => (
            <View key={index}>
              <Image source={{ uri: product.thumbnail }} style={{ width: 300, height: 200,borderRadius:20 }} />
              <Text style={{fontSize:16,padding:10}}>Title: {product.title}</Text>
              <Text style={{fontSize:16,paddingHorizontal:10}}>Price: ${product.price}</Text>
              <View>
              <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetail', { product: product })}
            >
              <Text style={styles.viewDetailsButton}>View Details</Text>
            </TouchableOpacity>
            </View>
            </View>
          ))}
        </View>
      ) : null}
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
    borderRadius:10,
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
    borderRadius:10,
    width:120,
    marginLeft:10,
    marginBottom:20
  },
  pickerItem:{
    borderWidth:1,
    margin:10,
    borderRadius:10
  }
});

export default CategoryScreen;
