import React from 'react';
import { HStack, VStack, Button, ScrollView } from 'native-base';
import { NavigationProp, useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import InfoCard from '../components/InfoCard';
import InfoCard2 from '../components/InfoCard2';
import mockData from '../data/mockData.json';

const ResultadoScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    //const route = useRoute<RouteProp<RootStackParamList, 'Resultado'>>();

  // Dados recebidos via navegação
    // const { estado, consumoEnergia, custoEnergia } = route.params;

    const handleHome = () => {
        navigation.navigate('Home');
    };

return (
    <ScrollView flex={1} contentContainerStyle={{padding: 6}} bg="#FFBC59">
    <VStack space={4} >
        <InfoCard
            title="Sistema indicado"
            items={mockData.sistemaIndicado}
            footer="Cada raio de sol é uma oportunidade de economizar e cuidar do planeta!"
        />

        <InfoCard
            title="Investimento"
            items={mockData.investimento}
            footer="Energia solar é a escolha certa para seu bolso e o planeta!"
        />

        <InfoCard
            title="Retorno do Investimento (under development)"
            items={[
                { label: '', value: '' },
            ]}
            footer=""
        />

        <InfoCard2
            title="Retorno Ambiental (estimado em 20 anos)"
            items={mockData.retornoAmbiental}
        />
        <HStack space={2} justifyContent={"space-between"} px={2} >
            <Button variant="outline" onPress={handleHome} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg", textAlign: "center"}}>Aprovar proposta</Button>
            <Button variant="outline" onPress={handleHome} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg", textAlign: "center"}}>Voltar ao menu</Button>
        </HStack>
    </VStack>
    </ScrollView>
    );
};

export default ResultadoScreen;
