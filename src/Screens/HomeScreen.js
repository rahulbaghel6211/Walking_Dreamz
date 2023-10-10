import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, Animated } from 'react-native';
import axios from 'axios';

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
          <Text style={{ fontSize: 20, color: 'black', marginTop: 5 }}>Welcome, {user.username}</Text>
        </View>
        <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
          <Image source={{ uri: user.image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
        </View>
      </View>
      <View style={styles.firstContainer}>
        <View style={styles.SecondContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('ProductManagement');
              }}
            >
              <Text style={styles.buttonText}>Manage Products</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SecondContainer}>
        
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('PostManagement')}
            >
              <Text style={styles.buttonText}>Manage Posts</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SecondContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('AllUsers')}
            >
              <Text style={styles.buttonText}>All User</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SecondContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Category')}
            >
              <Text style={styles.buttonText}>Category</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SecondContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Comment')}
            >
              <Text style={styles.buttonText}>Comments</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SecondContainer}>
            <TouchableOpacity
              style={styles.button}
            onPress={() => navigation.navigate('Quotes')}
            >
              <Text style={styles.buttonText}>quotes</Text>
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
  SecondContainer: {
    width: '43%',
    borderColor: 'black',
    borderWidth: 1,
    height: 110,
    margin: 10,
    borderRadius:10
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
