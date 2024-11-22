import React from 'react';
import { HStack, VStack, Box, Text, Button, ScrollView } from 'native-base';
import { NavigationProp, useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import InfoCard from '../components/InfoCard';
import InfoCard2 from '../components/InfoCard2';

const ResultadoScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, 'Resultado'>>();

  // Dados recebidos via navegação
    const { estado, consumoEnergia, custoEnergia } = route.params;

  // Valores mockados (deve-se inserir a logica aki)
    const sistemaIndicado = '4';
    const potenciaSistema = '5.04 kWp';
    const producaoEstimativa = '569 kWh/mês';
    const estimativaInvestimento = 'R$ 14.599,99';
    const economiaMensal = 'R$ 130,56';
    const totalEconomia = 'R$ 77.729,81';
    /*const retornoAmbiental = {
    co2Evitado: '41,32 toneladas',
    arvoresNecessarias: '315 árvores',
    custoPlantarArvores: 'R$ 6.460,00',
    };*/

    const handleHome = () => {
        navigation.navigate('Home');
};

return (
    <ScrollView flex={1} contentContainerStyle={{padding: 6}} bg="#FFBC59">
    <VStack space={4} >
        <InfoCard
            title="Sistema indicado"
            items={[
                { label: 'Número de módulos', value: sistemaIndicado },
                { label: 'Potência do sistema', value: potenciaSistema },
                { label: 'Produção de energia estimada (média anual)', value: producaoEstimativa },
            ]}
            footer="Cada raio de sol é uma oportunidade de economizar e cuidar do planeta!"
        />

        <InfoCard
            title="Investimento"
            items={[
                { label: 'Estimativa de investimento', value: estimativaInvestimento },
                { label: 'Economia mensal', value: economiaMensal },
                { label: 'Total economizado em 20 anos', value: totalEconomia },
            ]}
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
            items={[
            {
                icon: 'cloud',
                value: '41,32 toneladas',
                description: 'de CO2 que não serão emitidos na atmosfera',
            },
            {
                icon: 'nature',
                value: '315 árvores',
                description: 'seriam necessárias para eliminar a quantidade de CO2 da atmosfera',
            },
            {
                icon: 'attach-money',
                value: 'R$ 6.460,00',
                description: 'é o custo aproximado para plantar essa quantidade de árvores',
            },
            ]}
        />
        <HStack space={2} justifyContent={"space-between"} px={2} >
            <Button variant="outline" onPress={handleHome} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg", textAlign: "center"}}>Aprovar proposta</Button>
            <Button variant="outline" onPress={handleHome} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg", textAlign: "center"}}>Voltar ao início</Button>
        </HStack>
    </VStack>
    </ScrollView>
    );
};

export default ResultadoScreen;
