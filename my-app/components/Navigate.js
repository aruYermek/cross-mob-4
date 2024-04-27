import React from 'react';
import WelcomeScreen from './WelcomePage';
import SignUpWithEmailScreen from './SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import RegistrationSuccessScreen from './Successfully';
import HomePage from './HomePage';
import ProfileScreen from './Profile';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={WelcomeScreen}
                options={{ title: 'Welcome' }}
            />
            <Stack.Screen
                name='Sign Up'
                component={SignUpWithEmailScreen}
                options={{ title: 'Sign Up' }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name='Success'
                component={RegistrationSuccessScreen}
                options={{ title: 'Successfully' }}
            />
            <Stack.Screen
                name='HomePage'
                component={HomePage}
                options={{ title: 'Garden Elegance' }}
            />
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ title: 'Profile' }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}