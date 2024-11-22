import React from 'react';
import { VStack, Text, Button, ScrollView } from 'native-base';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const SobreScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleHome = () => {
        navigation.navigate('Home');
    };

return (
    <ScrollView flex={1} padding={2} bg="#FFBC59">
        <VStack space={3} padding={3} borderRadius={5} shadow={4} w={"98%"} alignItems="center" bg="#F4EDE7">
        <Text fontSize="lg" bold >
            Sobre o Aplicativo
        </Text>
        <Text fontSize="xs" bold >
            Este aplicativo foi desenvolvido como parte do projeto Global Solution da FIAP, com o objetivo de oferecer uma solução inovadora e sustentável para o setor de energia solar. Seu principal intuito é promover a conscientização sobre os benefícios da energia limpa, ao mesmo tempo em que facilita o planejamento e a adoção de sistemas solares pelos usuários.
        </Text>
        <Text fontSize="xs" bold >
            Através de uma interface intuitiva e funcional, o aplicativo combina ferramentas educativas com uma calculadora inteligente, permitindo que os usuários estimem o investimento necessário e os potenciais retornos econômicos e ambientais ao optar por energia solar. Além disso, o projeto busca contribuir para a sustentabilidade e o bem-estar coletivo, alinhando-se aos Objetivos de Desenvolvimento Sustentável.
        </Text>
        <Text fontSize="xs" bold >
            Este projeto foi idealizado e desenvolvido por André Alves da Silva, Gabriel de Souza Grego e Kayque Ferreira dos Santos, como uma demonstração prática de como a tecnologia pode ser usada para resolver desafios globais e promover um futuro mais sustentável.
        </Text>       
        <Button onPress={handleHome} w={"55%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg", textAlign: "center"}}>Voltar ao menu</Button>
        </VStack>       
    </ScrollView>
    );
};

export default SobreScreen;