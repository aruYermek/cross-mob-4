import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import axios from "axios";
import { styles } from "../styles/signUp";

const SignUpWithEmailScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleName = (e) =>{
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);
    
    if(nameVar.length>1){
      setNameVerify(true);
    }
  }

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleContinuePress = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
  
    if (isEmailValid && isPasswordValid) {
      const userData = {
        name: name,
        email,
        password,
      };
      axios
        .post("http://192.168.0.15:5001/register", userData)
        .then((res) => {
          if (res.data.data === "User already exist") {
            Alert.alert("User already exists", "Please use a different email or log in.");
          } else {
            navigation.navigate('Success');
          }
        })
        .catch((e) => console.log(e));
    } else {
      Alert.alert("Validation Error", "Please fix the errors in the form.");
    }
  };
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text style={styles.title}> Registration</Text>
      <View style={styles.content}>
      <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.inputEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinuePress}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpWithEmailScreen;
