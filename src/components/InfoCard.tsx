import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';

interface InfoCardProps {
    title: string;
    items: { label: string; value: string }[];
    footer?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items, footer }) => {
    return (
    <Box borderWidth={1} borderColor="gray.300" borderRadius="md" shadow={1} bg="#E9E3DE">
        <Box bg={"gray.700"} borderTopRadius={"md"}>
        <Text fontSize="xl" bold color="orange.500" mb={2} textAlign="center">
        {title}
        </Text>
        </Box>
        <VStack space={2} >
        {items.map((item, index) => (
            <HStack key={index} justifyContent="space-between" alignItems="center" p={2}>
                <Text fontSize="sm" bold maxW="60%">
                    {item.label}
                </Text>
                <Text fontSize="sm" color="gray.600" minW="40%" textAlign={"right"}>
                    {item.value}
                </Text>
            </HStack>
        ))}
        </VStack>
        {footer && (
        <Text mt={4} fontSize="sm" italic color="gray.500" textAlign="center">
            "{footer}"
        </Text>
        )}
    </Box>
    );
};

export default InfoCard;
