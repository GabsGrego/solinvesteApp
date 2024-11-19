import React from 'react';
import { VStack, Input, Button, Text, Image } from 'native-base';

const ResultadoScreen: React.FC = () => {





return (
    <VStack space={4} padding={5} alignItems="center">
        <Text fontSize="2xl" bold> Sistema Indicado</Text>
        <Text fontSize="2xl" bold> Investimento</Text>
        <Text fontSize="2xl" bold> Retorno do Investimento</Text>
        <Text fontSize="2xl" bold> Retorno Ambiental</Text>
        <Button>Voltar</Button>
    </VStack>
    );
};

export default ResultadoScreen;