import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://olympus-hbyu.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login bem-sucedido:', data);
                navigation.navigate('Home');
            } else {
                Alert.alert('Erro de login', data.error || 'Erro desconhecido');
            }
        } catch (error) {
            console.error('Erro ao efetuar login:', error);
            Alert.alert('Erro de rede', 'Não foi possível conectar ao servidor');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <View style={styles.rememberMeContainer}>
                    <TouchableOpacity>
                        <Text style={styles.rememberMeText}>Lembrar-me</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>Bem-vindo</Text>
                <Text>Não tem uma conta?</Text>
                <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signUpButtonText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    formContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    rememberMeContainer: {
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    rememberMeText: {
        fontSize: 14,
        color: '#555',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPasswordContainer: {
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#007bff',
        fontSize: 14,
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    signUpButton: {
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#007bff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    signUpButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
});
