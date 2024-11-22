import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';
import ResultadoScreen from '../screens/ResultadoScreen';
import EducScreen from '../screens/EducScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Calculadora" component={CalculadoraScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Resultado" component={ResultadoScreen} />
      <Stack.Screen name="Educacional" component={EducScreen}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;