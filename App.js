import React from "react";
import { Text,View} from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";
import Toast from "react-native-toast-message";
const App=()=>{
    return(
      <AuthProvider>
    <Navigation/>
    <Toast ref={(ref) => Toast.setRef(ref)} />
      </AuthProvider>  
    );
}

export default App