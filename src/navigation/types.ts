export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Calculadora: undefined;
    Educacional: undefined;
    Resultado: {
        estado: string;
        consumoEnergia: number;
        custoEnergia: number;
    };
};