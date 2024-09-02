import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Bem-vindo ao Olympus</Text>
            <Button
                title="Ver Usuários"
                onPress={() => navigation.navigate('Usuarios')}
            />
        </View>
    );
}
