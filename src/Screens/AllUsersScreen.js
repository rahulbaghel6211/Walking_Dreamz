import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AllUsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace 'API_ENDPOINT' with the actual API endpoint URL
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users); // Set the user data in state
        setIsLoading(false); // Set isLoading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set isLoading to false if there's an error
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {users.map((user, index) => (
              <View key={index} style={styles.userContainer}>
                <Image
                  source={{ uri: user.image }}
                  style={styles.image}
                />
               <View>
               <Text style={styles.name}>
                  {`${user.firstName} ${user.lastName}`}
                </Text>
                <Text style={styles.email}>{user.email}</Text>
               </View>
                    
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 16,
    flexDirection:'row'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
  },
});

export default AllUsersScreen;
