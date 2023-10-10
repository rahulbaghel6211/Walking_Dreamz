import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BASE_URL } from "../config";
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const login = () => {
        if (!email || !password) {
            setError("Please fill in both email and password.");
            return;
        }

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            navigation.navigate('Home', { user: data });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Enter Email"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                />

                {error && <Text style={styles.error}>{error}</Text>}

                <Button title="Login" onPress={login} />
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    wrapper: {
        width: '80%'
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue'
    },
    error: {
        color: 'red',
        marginBottom: 10,
    }
})

export default LoginScreen;
