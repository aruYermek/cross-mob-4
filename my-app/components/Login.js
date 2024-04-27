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
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = ({ navigation }) => {
    const handleLogin = () => {
        const userData = {
            email: email,
            password,
        };
        axios
            .post("http://192.168.0.15:5001/login", userData)
            .then(res => {
                if (res.data.data === "Register please!") {
                    Alert.alert("User not found", "Please register first.");
                } else {
                    AsyncStorage.setItem('token', res.data.data);
                    AsyncStorage.setItem('userType', res.data.userType)
                    console.log(res.data)
                    navigation.navigate('HomePage');
                }
            })
            .catch(e => console.log(e));
    };


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" || Platform.OS === "android" ? "padding" : "padding"}
            style={styles.container}>
            <Text style={styles.title}> Login</Text>
            <View style={styles.content}>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleLogin}>
                    <Text style={styles.continueButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;
