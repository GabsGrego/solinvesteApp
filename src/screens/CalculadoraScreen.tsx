import React from 'react';
import { VStack, Input, Text, Image } from 'native-base';
import { View, TextInput, Button} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const CalculadoraScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleResultado = () => {
        navigation.navigate('Resultado');
    };



return (
    <VStack space={4} padding={5} alignItems="center">
        <Text fontSize="xl" bold> Digite os dados de sua conta de energia e descubra o quanto você pode economizar com energia solar. Simples, rápido e prático!</Text>
        <Text fontSize="md" bold> Selecione seu Estado</Text>
        <Input placeholder="São Paulo" />
        <Text fontSize="md" bold>Insira o valor do consumo de energia (kWh)</Text>
        <Input/>
        <Text fontSize="md" bold>Insira o custo do consumo de energia (R$)</Text>
        <Input/>
        <Button title="Calcular" onPress={handleResultado}/>
    </VStack>
    );
};

export default CalculadoraScreen;