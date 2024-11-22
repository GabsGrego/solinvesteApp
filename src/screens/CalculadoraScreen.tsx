import React, { useState } from 'react';
import { VStack, Text, Input, Select, Button, Box, HStack, Pressable, Center, IconButton, Modal, Image  } from 'native-base';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const CalculadoraScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

  // Estados para armazenar os dados do usuário
    const [estado, setEstado] = useState('');
    const [consumoEnergia, setConsumoEnergia] = useState('');
    const [custoEnergia, setCustoEnergia] = useState('');

    const handleCalcular = () => {
    navigation.navigate('Resultado', {
        estado,
        consumoEnergia: parseFloat(consumoEnergia),
        custoEnergia: parseFloat(custoEnergia),
        });
    };

    const handleHome = () => {
        navigation.navigate('Home');
    };

return (
    <VStack flex={1} space={3} padding={2} bg="#FFBC59" alignItems="center">
        <VStack padding={3} borderRadius={15} shadow={4} w={"98%"} alignItems="center" bg="#F4EDE7">
        <Text fontSize="sm" bold textAlign="center">
            Digite os dados de sua conta de energia e descubra o quanto você pode economizar com energia solar. 
            Simples, rápido e prático!
        </Text>
        <Text mt={3} fontSize="sm" bold textAlign="center"> Selecione seu Estado</Text>
        <Select mt={1} selectedValue={estado} onValueChange={(value) => setEstado(value)}
            placeholder="Selecione seu Estado" bg="white">
            <Select.Item label="São Paulo" value="SP" />
        </Select>
        <Text mt={3} fontSize="sm" bold textAlign="center"> Insira o consumo de energia (kWh)</Text>
        <HStack>
            <Input mt={1} width={"90%"} placeholder="Digite apenas o número" value={consumoEnergia} onChangeText={setConsumoEnergia} keyboardType="numeric" bg="white"/>
            <IconButton icon={<MaterialIcons name="info-outline" size={25} color="black" />}
                onPress={() => setShowModal(true)} borderRadius="full" _icon={{ color: "orange.600", size: "lg" }} />
        </HStack>
        <Text mt={3} fontSize="sm" bold textAlign="center"> Insira o custo de energia (R$)</Text>
        <HStack>
            <Input mt={1} width={"90%"} placeholder="Digite apenas o número" value={custoEnergia} onChangeText={setCustoEnergia} keyboardType="numeric" bg="white"/>
            <IconButton icon={<MaterialIcons name="info-outline" size={25} color="black" />}
                onPress={() => setShowModal2(true)} borderRadius="full" _icon={{ color: "orange.600", size: "lg" }} />
        </HStack>
        <Button mt={3} onPress={handleCalcular} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg" }}>Calcular</Button>
        </VStack>
        <VStack space={2} padding={2} borderRadius={15} shadow={4} w={"98%"} alignItems="center" bg="#F4EDE7" >
            <Text mb={2} fontSize="sm" bold textAlign="center"> 
                Caso prefira você pode também: 
            </Text>
            <HStack space={5} justifyContent="space-between">
            <Text fontSize="sm" bold textAlign="center" maxWidth={"70%"}> 
                Tirar foto de sua conta de luz 
            </Text>
            <Pressable alignItems="center" width="20%">
                <Center bg="orange.400" borderRadius={10} padding={4} width="100%">
                    <FontAwesome name="camera" size={18} color="white" />
                </Center>
            </Pressable>
            </HStack>
            <HStack space={5} justifyContent="space-between">
            <Text fontSize="sm" bold textAlign="center" maxWidth={"70%"}> 
                Trazer seus dados direto do site da Enel 
            </Text>
            <Pressable alignItems="center" width="20%">
                <Center bg="orange.400" borderRadius={10} padding={4} width="100%">
                    <FontAwesome name="download" size={18} color="white" />
                </Center>
            </Pressable>
            </HStack>
        </VStack>
        <Button onPress={handleHome} w={"50%"} borderRadius={8} bg="orange.400" _text={{ bold: true, color: "white", fontSize:"lg", textAlign: "center"}}>Voltar ao menu</Button>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="md">
        <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header bg={"gray.100"}>Onde encontrar esta informação?</Modal.Header>
            <Modal.Body bg={"gray.700"}>
                <Box alignItems="center">
                    <Image source={require('../components/infoConsumo.png')}
                    alt="Exemplo de conta de luz" size="xl" borderRadius="md"/>
                </Box>
            </Modal.Body>
        </Modal.Content>
        </Modal>

        <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="md">
        <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header bg={"gray.100"}>Onde encontrar esta informação?</Modal.Header>
            <Modal.Body bg={"gray.700"}>
                <Box alignItems="center">
                    <Image source={require('../components/infoCusto.png')}
                    alt="Exemplo de conta de luz" size="xl" borderRadius="md"/>
                </Box>
            </Modal.Body>
        </Modal.Content>
        </Modal>
    </VStack>
    );
};

export default CalculadoraScreen;