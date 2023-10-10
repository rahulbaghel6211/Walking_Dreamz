import React, { createContext } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const register = (name, email, password) => {
    fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        let userInfo = data;
        console.log(userInfo);
      })
      .catch((error) => {
        console.error('register error', error);
      });
  };

  return (
    <AuthContext.Provider value={{ register }}>
      {children}
    </AuthContext.Provider>
  );
};
