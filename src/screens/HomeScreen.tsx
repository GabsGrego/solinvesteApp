import React from 'react';
import { VStack, Input, Button, Text, Image } from 'native-base';

const HomeScreen: React.FC = () => {





return (
    <VStack space={4} padding={5} alignItems="center">
        <Text fontSize="2xl" bold> SOLINVESTE </Text>
        <Text fontSize="md" bold> Curioso para entender como a energia solar funciona e por que ela é tão vantajosa? Descubra tudo sobre essa solução sustentável e comece a fazer escolhas inteligentes para o seu futuro. Clique abaixo e mergulhe nesse conhecimento!</Text>
        <Button>Quero aprender</Button>
        <Text fontSize="md" bold> Descubra agora como a energia solar pode transformar suas finanças! Informe seus dados de consumo e veja em segundos quanto você pode economizar e investir para ter uma energia limpa e sustentável na sua propriedade. Clique abaixo e comece a economizar hoje mesmo!</Text>
        <Button>Calcule já</Button>
    </VStack>
    );
};

export default HomeScreen;