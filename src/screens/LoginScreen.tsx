import React from 'react';
import { VStack, Input, Text, Image } from 'native-base';
import { View, TextInput, Button} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLogin = () => {
        navigation.navigate('Home');
    };


return (
    <VStack space={4} padding={5} alignItems="center">
        <Text fontSize="2xl" bold> SOLINVESTE</Text>
        <Text fontSize="xl" bold>Faça login com sua conta Enel e veja como investir no futuro.</Text>
        <Input placeholder="Email" />
        <Input placeholder="Senha" type="password" />
        <Button title="Login" onPress={handleLogin}/>
    </VStack>
    );
};

export default LoginScreen;
