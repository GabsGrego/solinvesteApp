import React from 'react';
import { Box, VStack, Text, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // Substitua pelo pacote de ícones que preferir

interface InfoCard2Props {
  title: string;
  items: { icon: string; value: string; description: string }[];
}

const InfoCard2: React.FC<InfoCard2Props> = ({ title, items }) => {
  return (
    <Box borderWidth={1} borderColor="gray.300" borderRadius="md" shadow={1} bg="#E9E3DE">

      <Box bg="gray.700" borderTopRadius="md" padding={2}>
        <Text fontSize="xl" bold color="orange.500" textAlign="center">
          {title}
        </Text>
      </Box>

      {/* Conteúdo */}
      <VStack space={4} padding={3}>
        {items.map((item, index) => (
          <Box
            key={index}
            alignItems="center"
            bg="#F4EDE7"
            padding={4}
            borderRadius="md"
            shadow={1}
          >
            {/* Ícone */}
            <Icon as={MaterialIcons} name={item.icon} size="lg" color="orange.500" mb={2} />

            {/* Valor */}
            <Text fontSize="xl" bold color="gray.800" textAlign="center">
              {item.value}
            </Text>

            {/* Descrição */}
            <Text fontSize="sm" color="gray.600" textAlign="center">
              {item.description}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default InfoCard2;
