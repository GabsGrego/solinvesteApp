import React from 'react';
import { VStack, Text, Image, Button, Box, HStack, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const EducScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleHome = () => {
        navigation.navigate('Home');
    };

return (
    <ScrollView flex={1} bg="#FFBC59">
        <VStack space={1} alignItems="center" width="100%">
            <Image source={require('../components/cartImage.jpg')} alt="img" size={"xl"} width={"100%"}/>
        <VStack space={4} padding={3} borderRadius={5} shadow={4} w={"98%"} alignItems="center" bg="#F4EDE7">
        <Text fontSize="lg" bold >
            Os benefícios da Energia Solar
        </Text>
        <Text fontSize="xs" bold >
            A energia solar é uma alternativa sustentável e altamente benéfica para o meio ambiente, além de ser uma excelente forma de economizar a longo prazo. Em comparação com a energia elétrica convencional, a energia solar produzida em casa emite uma quantidade muito menor de CO₂ na atmosfera, reduzindo o impacto ambiental e ajudando no combate às mudanças climáticas. Além disso, ela oferece grande rentabilidade econômica, reduzindo significativamente a conta de luz e permitindo uma recuperação rápida do investimento inicial.
        </Text>
        <Text fontSize="xs" bold >
            Para se ter uma ideia, a quantidade de CO₂ emitida para gerar a eletricidade que usamos diariamente em casa é significativamente maior quando usamos fontes convencionais, como termelétricas, que dependem da queima de combustíveis fósseis. Já a energia solar é totalmente limpa e renovável, o que significa que, ao longo do tempo, sua casa pode funcionar com quase zero de emissões de carbono! Além disso, quem opta pela energia solar pode até mesmo gerar créditos de carbono – um incentivo financeiro pelo baixo impacto ambiental de sua residência. Esses créditos podem ser negociados, criando uma fonte adicional de economia e de rentabilidade ao longo dos anos.
        </Text>
        <Text fontSize="xs" bold >
            A instalação de painéis solares é um investimento que rapidamente se paga com a economia nas contas mensais. Imagine que a energia usada em um mês para manter eletrodomésticos, iluminação e climatização de uma casa média emite, com fontes convencionais, dezenas de quilos de CO₂ e gera altos custos. Com a energia solar, esses gastos podem ser reduzidos a uma fração, transformando sua conta de luz em uma economia significativa.
        </Text>
        <Text fontSize="xs" bold >
            Além disso, a instalação de painéis solares valoriza sua propriedade, reduz a dependência da rede elétrica e oferece estabilidade contra as variações de tarifas, uma vez que você passará a gerar parte ou até mesmo toda a energia que consome. Com a energia solar, você faz uma escolha inteligente para o presente e extremamente rentável para o futuro.
        </Text>
        
        <Button onPress={handleHome} w={"55%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg", textAlign: "center"}}>Voltar ao menu</Button>
        </VStack>
        </VStack>        
    </ScrollView>
    );
};

export default EducScreen;