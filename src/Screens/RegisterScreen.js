import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text,TextInput,TouchableOpacity,View} from "react-native";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen=({navigation})=>{
    const [email,setEmail]=useState(null);
    const [password,setpassword]=useState(null)
    const [name,setName]=useState(null)

    const {register}=useContext(AuthContext)
    return(
        <View style={styles.container}>
           <View style={styles.wrapper}>
           <TextInput style={styles.input}
             value={name}
              placeholder="Enter Name"
              onChangeText={text=>setName(text)}
               />

            <TextInput style={styles.input}
             value={email}
              placeholder="Enter Email"
              onChangeText={text=>setEmail(text)}
               />
            <TextInput value={password} 
            style={styles.input}
             placeholder="Enter Password" 
             secureTextEntry
             onChangeText={text=>setpassword(text)}
             />
            <Button title="Register" onPress={()=>{
                register(name,email,password);
            }}/>
            <View  style={{flexDirection:'row',marginTop:20}} >
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    wrapper:{
        width:'80%'
    },
    input:{
        marginBottom:12,
        borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
    },
    link:{
        color:'blue'
    }
})

export default RegisterScreen