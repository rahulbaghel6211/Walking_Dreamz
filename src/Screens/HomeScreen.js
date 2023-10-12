import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, Animated, } from 'react-native';
import Icon from 'react-native-vector-icons//Feather';

const HomeScreen = ({ navigation, route }) => {
  const { user } = route.params;

  // Animation value
  const opacity = new Animated.Value(0);

  useEffect(() => {
    // Add animation on component mount
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.UserContainer}>
        <View>
          <Text style={{ fontSize: 20, color: 'black', marginTop: 5 }}>Welcome Back, {user.username}</Text>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
          <Image source={{ uri: user.image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
        </View>
      </View>
      <View style={styles.firstContainer}>
        <View style={[styles.card, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('ProductManagement');
              }}
            >
              <Image
    source={require('../assets/images/project.png')}
    style={{ width: 50, height: 50 }}
  />
            <Text style={styles.buttonText}>Product</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
        
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PostManagement')}
            >
               <Image
    source={require('../assets/images/chat.png')}
    style={{ width: 50, height: 50 }}
  />
              <Text style={styles.buttonText}>Manage Post</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('AllUsers')}
            >
                <Image
    source={require('../assets/images/documnets.png')}
    style={{ width: 50, height: 50 }}
  />
              <Text style={styles.buttonText}>All User</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Category')}
            >
                <Image
    source={require('../assets/images/dollar.png')}
    style={{ width: 50, height: 50 }}
  />
              <Text style={styles.buttonText}>Category</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Comment')}
            >
                <Image
    source={require('../assets/images/catgory.png')}
    style={{ width: 50, height: 50 }}
  />
              <Text style={styles.buttonText}>Comments</Text>
              
            </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
            <TouchableOpacity
              style={styles.button}
            onPress={() => navigation.navigate('Quotes')}
            >
                <Image
    source={require('../assets/images/Quotes.png')}
    style={{ width: 50, height: 50 }}
  />
              <Text style={styles.buttonText}>Quotes</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  UserContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  container: {
    flex: 1,
  },
  firstContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {  
    backgroundColor: 'white',  
    borderRadius: 8,  
    paddingVertical:35,  
    paddingHorizontal: 25,  
    width: '43%',  
    marginVertical: 10, 
    marginHorizontal:10 
  },  
  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },  
});

export default HomeScreen;
