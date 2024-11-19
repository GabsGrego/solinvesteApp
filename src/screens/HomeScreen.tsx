import React from 'react';
import { VStack, Input, Text, Image } from 'native-base';
import { View, TextInput, Button} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleEduc = () => {
        navigation.navigate('Calculadora');
    };

    const handleCalc = () => {
        navigation.navigate('Calculadora');
    };


return (
    <VStack space={4} padding={5} alignItems="center">
        <Text fontSize="2xl" bold> SOLINVESTE </Text>
        <Text fontSize="md" bold> Curioso para entender como a energia solar funciona e por que ela é tão vantajosa? Descubra tudo sobre essa solução sustentável e comece a fazer escolhas inteligentes para o seu futuro. Clique abaixo e mergulhe nesse conhecimento!</Text>
        <Button title="Quero aprender" onPress={handleEduc}/>
        <Text fontSize="md" bold> Descubra agora como a energia solar pode transformar suas finanças! Informe seus dados de consumo e veja em segundos quanto você pode economizar e investir para ter uma energia limpa e sustentável na sua propriedade. Clique abaixo e comece a economizar hoje mesmo!</Text>
        <Button title="Calcule já" onPress={handleCalc}/>
    </VStack>
    );
};

export default HomeScreen;