import React from 'react';
import { VStack, Input, Text, Image } from 'native-base';
import { View, TextInput, Button} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const ResultadoScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleHome = () => {
        navigation.navigate('Home');
    };


return (
    <VStack space={4} padding={5} alignItems="center">
        <Text fontSize="2xl" bold> Sistema Indicado</Text>
        <Text fontSize="2xl" bold> Investimento</Text>
        <Text fontSize="2xl" bold> Retorno do Investimento</Text>
        <Text fontSize="2xl" bold> Retorno Ambiental</Text>
        <Button title="Voltar" onPress={handleHome}/>
    </VStack>
    );
};

export default ResultadoScreen;