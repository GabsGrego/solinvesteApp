import React from 'react';
import { VStack, Text, Box, HStack, Button, IconButton } from 'native-base';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleEduc = () => {
        navigation.navigate('Educacional');
    };

    const handleCalc = () => {
        navigation.navigate('Calculadora');
    };

    const handleSobre = () => {
        navigation.navigate('Sobre');
    };


return (
    <VStack flex={1} space={4} bg="#F4EDE7" alignItems="center">
        <Box bg="orange.500" padding={4} width="100%" alignItems="center">
            <HStack justifyContent="space-between" width="100%">
                <Text fontSize="3xl" bold textAlign="center" color={"amber.300"}> SOLINVESTE </Text>
                <IconButton icon={<MaterialIcons name="info-outline" size={25} color="yellow" />}
                onPress={handleSobre}/>
            </HStack>
        </Box> 
        <VStack space={4} padding={3} borderRadius={15} shadow={4} w={"90%"} alignItems="center" bg="#FFFFFFFF">
            <Text fontSize="sm" bold textAlign="center"> Curioso para entender como a energia solar funciona e por que ela é tão vantajosa? Descubra tudo sobre essa solução sustentável e comece a fazer escolhas inteligentes para o seu futuro. Clique abaixo e mergulhe nesse conhecimento!</Text>
            <Button onPress={handleEduc} w={"80%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"md" }}>Quero Aprender</Button>
        </VStack>
        <VStack space={4} padding={3} borderRadius={15} shadow={4} w={"90%"} alignItems="center" bg="#FFFFFFFF">
            <Text fontSize="sm" bold textAlign="center"> Descubra agora como a energia solar pode transformar suas finanças! Informe seus dados de consumo e veja em segundos quanto você pode economizar e investir para ter uma energia limpa e sustentável na sua propriedade. Clique abaixo e comece a economizar hoje mesmo!</Text>
            <Button onPress={handleCalc} w={"80%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"md" }}>Calcule já</Button>
        </VStack>        
    </VStack>
    );
};

export default HomeScreen;