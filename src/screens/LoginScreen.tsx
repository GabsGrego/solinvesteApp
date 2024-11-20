import React from 'react';
import { VStack, Input, Text, Image, Button, Box } from 'native-base';
import { ImageBackground, StyleSheet} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const LoginScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleLogin = () => {
        navigation.navigate('Home');
    };


    return (
        <ImageBackground
            source={require('../components/bgLogin.jpg')}
            style={styles.background}>
        <VStack space={4} padding={5} alignItems="center" justifyContent="center" flex={1}>
            <Image source={require('../components/logoApp.png')} alt="img" maxWidth={"100%"} />
            <Box padding={2} bg={"white"} borderRadius={8}>
                <Text fontSize="md" textAlign="center" color="black">
                Faça login com sua conta Enel e veja como investir no futuro.
                </Text>
            </Box>            
            <Input width={"85%"} placeholder="Email" backgroundColor="white" />
            <Input width={"85%"} placeholder="Senha" type="password" backgroundColor="white" />
            <Button my={4} onPress={handleLogin} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"md" }}>Login</Button>
            <Image source={require('../components/logoSolari.png')} alt="img" size={'xs'} w={'100%'}/>
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