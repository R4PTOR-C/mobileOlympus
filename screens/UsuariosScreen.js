import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function UsuariosScreen() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://olympus-hbyu.onrender.com/usuarios')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error('Erro ao buscar usuários:', error));
    }, []);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Usuários</Text>
            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ flex: 1 }}>{item.id}</Text>
                        <Text style={{ flex: 2 }}>{item.nome}</Text>
                        <Text style={{ flex: 3 }}>{item.email}</Text>
                        <Text style={{ flex: 1 }}>{item.genero}</Text>
                        <Text style={{ flex: 1 }}>{item.idade}</Text>
                        <Text style={{ flex: 2 }}>{item.funcao}</Text>
                        <Button title="Deletar" color="red" onPress={() => handleDelete(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}
