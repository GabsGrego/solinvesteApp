import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';
import ResultadoScreen from '../screens/ResultadoScreen';
import EducScreen from '../screens/EducScreen';
import SobreScreen from '../screens/SobreScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
      <Stack.Screen name="Resultado" component={ResultadoScreen} />
      <Stack.Screen name="Educacional" component={EducScreen}/>
      <Stack.Screen name="Sobre" component={SobreScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;