import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const RegistrationSuccessScreen = ({ navigation }) => {
    const handleLoginPress = () => {
        navigation.navigate('Login'); 
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Icon name="check-circle" size={60} color="green" />
                <Text style={styles.successTitle}>Successfully!</Text>
                <Text style={styles.successText}>A letter with instructions was sent to email</Text>
                <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                    <Text style={styles.loginButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    successTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,

    },
    successText: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 30,
    },
    loginButton: {
        borderColor: '#FF65BB',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    loginButtonText: {
        color: '#FF65BB',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RegistrationSuccessScreen;
