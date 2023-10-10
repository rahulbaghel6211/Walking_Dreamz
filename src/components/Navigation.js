import React from "react";
import { Text,View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import PostManagementScreen from "../Screens/PostManagementScreen";
import ProductManagementScreen from "../Screens/ProductManagementScreen";
import ProductDetailScreen from "../Screens/ProductDetailScreen";
import AllUsersScreen from "../Screens/AllUsersScreen";
import CatgoryScreen from "../Screens/CategoryScreen";
import QuotesScreen from "../Screens/QuotesScreen";
import CommentScreen from "../Screens/CommentScreen";

const Stack = createNativeStackNavigator();

const Navigation=()=>{
    return(

      <NavigationContainer>
        <Stack.Navigator><Stack.Screen 
        name="Login"
         component={LoginScreen} 
         options={{headerShown:false}}/>
        <Stack.Screen 
        name="Register" 
        component={RegisterScreen}
        options={{headerShown:false}}
        />   

            <Stack.Screen name="Home" component={HomeScreen}/>  
            <Stack.Screen name="ProductManagement" component={ProductManagementScreen}/> 
            <Stack.Screen name="PostManagement" component={ PostManagementScreen}/> 
            <Stack.Screen name="ProductDetail" component={ ProductDetailScreen}/> 
            <Stack.Screen name="AllUsers" component={AllUsersScreen}/> 
            <Stack.Screen name="Category" component={CatgoryScreen}/> 
            <Stack.Screen name="Quotes" component={QuotesScreen}/> 
            <Stack.Screen name="Comment" component={CommentScreen}/> 
            

        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigation