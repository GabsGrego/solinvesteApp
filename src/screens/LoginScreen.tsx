import React, { useState, useRef } from 'react';
import { VStack, Input, Text, Image, Button, Box, Pressable, AlertDialog } from 'native-base';
import { ImageBackground, StyleSheet} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import users from '../data/users.json';


const LoginScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const cancelRef = useRef(null);


    const handleLogin = () => {
        const user = users.find(
            (u) => u.email === email && u.password === password
        );
        
        if (user) {
            setError('');
            alert('Login bem-sucedido!');
            navigation.navigate("Home");
        } else {
            setError('Usuário ou senha inválidos');
            setIsAlertOpen(true); // Exibe o pop-up em caso de erro
        }
    };

    const handleSenha = () => {
        console.log('Alterar senha');
    };

    return (
        <ImageBackground source={require('../components/images/bgLogin.jpg')} style={styles.background}>
        <VStack space={4} px={5} pt={10} alignItems="center" justifyContent="center" flex={1}>
            <Box w={"100%"} mt={8} p={2} alignItems={"center"}>
            <Image source={require('../components/images/logoApp.png')} alt="img" size={'sm'} width={"100%"} />
            </Box>
            <Box padding={2} bg={"white"} borderRadius={8}>
                <Text fontSize="md" textAlign="center" color="black">
                Faça login com sua conta Enel e veja como investir no futuro.
                </Text>
            </Box>            
            <Input width={"85%"} placeholder="Email" backgroundColor="white" onChangeText={(text) => setEmail(text)}/>
            <Input width={"85%"} placeholder="Senha" type="password" backgroundColor="white" onChangeText={(text) => setPassword(text)}/>
            <Pressable alignSelf={"flex-end"} onPress={handleSenha}><Text mt={-3} mr={5} fontSize="xs" color="blue.700">Esqueceu a senha?</Text></Pressable>
            <Button my={4} onPress={handleLogin} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"md" }}>Login</Button>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)}>
            <AlertDialog.Content bg="red.500" borderRadius="md">
                <AlertDialog.CloseButton color="white" />
                    <AlertDialog.Header bg="red.400" borderTopRadius="md">
                        <Text color="white" fontSize="lg" bold textAlign={"center"}>Falha no Login</Text>
                    </AlertDialog.Header>
                <AlertDialog.Body>
                        <Text fontSize="md" textAlign={"center"}>
                            {error}
                        </Text>
                </AlertDialog.Body>
            </AlertDialog.Content>
            </AlertDialog>   
            
            <Box w={"100%"} mt={4} p={2} alignItems={"center"}>
            <Image source={require('../components/images/logoSolari.png')} alt="img" size={'md'} w={"60%"}/>
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