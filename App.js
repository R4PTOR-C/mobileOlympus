import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';  // Import your LoginScreen
import UsuariosScreen from './screens/UsuariosScreen';  // Import your UsuariosScreen
import HomeScreen from './screens/HomeScreen';  // Import your HomeScreen
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ title: 'Cadastrar-se' }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Bem-vindo' }}
                />
                <Stack.Screen
                    name="Usuarios"
                    component={UsuariosScreen}
                    options={{ title: 'Usuários' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
