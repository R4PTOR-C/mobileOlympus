import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Certifique-se de instalar esse pacote
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [genero, setGenero] = useState('');
    const [idade, setIdade] = useState('');
    const [senha, setSenha] = useState('');
    const [funcao, setFuncao] = useState('');

    const handleSubmit = async () => {
        const usuario = { nome, email, genero, idade, senha, funcao };

        try {
            const response = await fetch(`https://olympus-hbyu.onrender.com/usuarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Usuário adicionado com sucesso!');
                // Resetar o formulário ou redirecionar o usuário
            } else {
                Alert.alert('Erro', 'Falha ao adicionar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            Alert.alert('Erro', 'Erro ao conectar ao servidor.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Adicionar Novo Usuário</Text>

            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome"
            />

            <Text>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                autoComplete="email"
            />

            <Text>Idade</Text>
            <TextInput
                style={styles.input}
                value={idade}
                onChangeText={setIdade}
                placeholder="Idade"
                keyboardType="numeric"
            />

            <Text>Senha</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Senha"
                secureTextEntry
                autoComplete="password"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
