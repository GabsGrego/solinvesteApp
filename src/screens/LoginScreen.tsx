import React from 'react';
import { VStack, Input, Button, Text, Image } from 'native-base';

const LoginScreen: React.FC = () => {





return (
    <VStack space={4} padding={5} alignItems="center">
        <Text fontSize="2xl" bold> SOLINVESTE</Text>
        <Text fontSize="xl" bold>Faça login com sua conta Enel e veja como investir no futuro.</Text>
        <Input placeholder="Email" />
        <Input placeholder="Senha" type="password" />
        <Button>Login</Button>
    </VStack>
    );
};

export default LoginScreen;
