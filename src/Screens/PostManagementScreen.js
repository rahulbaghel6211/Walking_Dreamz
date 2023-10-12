import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const PostManagementScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handlePostData = () => {
    // Validate the input fields
    if (!title || !image || !description) {
      setError('Please fill in all fields');
      return;
    }

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
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Success',
          text2: 'Data posted successfully.',
        });
        // Handle the response data as needed
        setError(null); // Clear any previous error
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occur during the request
        setError('An error occurred while posting data');
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

      {error && <Text style={styles.errorText}>{error}</Text>}

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
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
});

export default PostManagementScreen;
