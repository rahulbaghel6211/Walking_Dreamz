import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PostManagementScreen= () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handlePostData = () => {
    // Create a product data object
    const productData = {
      title: title,
      image: image,
      description: description,
    };

    // Send a POST request to the server
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log('Response from server:', responseData);
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occur during the request
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />

      <Text style={styles.label}>Image URL:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setImage(text)}
        value={image}
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDescription(text)}
        value={description}
        multiline
      />

      <Button title="Submit" onPress={handlePostData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});



export default PostManagementScreen;