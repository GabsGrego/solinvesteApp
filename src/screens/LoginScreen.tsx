import React from 'react';
import { VStack, Input, Text, Image, Button, Box, Pressable } from 'native-base';
import { ImageBackground, StyleSheet} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    const handleSenha = () => {
        console.log('Alterar senha');
    };

    return (
        <ImageBackground source={require('../components/bgLogin.jpg')} style={styles.background}>
        <VStack space={4} px={5} pt={10} alignItems="center" justifyContent="center" flex={1}>
            <Box w={"100%"} mt={8} p={2} alignItems={"center"}>
            <Image source={require('../components/logoApp.png')} alt="img" size={'sm'} width={"100%"} />
            </Box>
            <Box padding={2} bg={"white"} borderRadius={8}>
                <Text fontSize="md" textAlign="center" color="black">
                Faça login com sua conta Enel e veja como investir no futuro.
                </Text>
            </Box>            
            <Input width={"85%"} placeholder="Email" backgroundColor="white" />
            <Input width={"85%"} placeholder="Senha" type="password" backgroundColor="white" />
            <Pressable alignSelf={"flex-end"} onPress={handleSenha}><Text mt={-3} mr={5} fontSize="xs" color="blue.700">Esqueceu a senha?</Text></Pressable>
            <Button my={4} onPress={handleLogin} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"md" }}>Login</Button>
            <Box w={"100%"} mt={4} p={2} alignItems={"center"}>
            <Image source={require('../components/logoSolari.png')} alt="img" size={'md'} w={"60%"}/>
            </Box>
        </VStack>
        </ImageBackground>
    );
};
    
    const styles = StyleSheet.create({
        background: {
        flex: 1,
        resizeMode: 'cover'
    }
});
    
export default LoginScreen;