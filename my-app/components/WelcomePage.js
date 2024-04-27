import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/welcom'; 

export default function WelcomeScreen({navigation}) {
  const SignUpButton = () =>{
    navigation.navigate('Sign Up')
  }
  const LoginButton =() =>{
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backround_img.png')} 
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Welcome to Garden Elegance!</Text>
        <Text style={styles.subtitle}>Order your flower bouquet faster!</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={SignUpButton}>Sign Up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonTextLogin} onPress={LoginButton}>Login</Text></TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
