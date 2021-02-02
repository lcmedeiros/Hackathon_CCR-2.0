/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import Splash from './pages/splash';
import Splash_Perfil from './pages/splash_perfil';
import Cadastro_Usuario from './pages/cadastro_usuario';
import Map_Usuario from './pages/map_usuario';
import Cadastro_Usuario_Perfil from './pages/cadastro_usuario_perfil';
import Exatas from './pages/exatas';
import Profissao from './pages/tecnologia';
import List_Mentor from './pages/list_mentor';
import Mentor from './pages/mentor';
import Candidato from './pages/candidato';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerStyle: { backgroundColor: '#00CC99' }, headerTitleAlign: { Splash }, headerTintColor: '#fff' }} >

        <Stack.Screen name="Splash" component={Splash} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Splash Perfil" component={Splash_Perfil} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Cadastro Usuario" component={Cadastro_Usuario} />
        <Stack.Screen name="Map Usuario" component={Map_Usuario} />
        <Stack.Screen name="Cadastro Usuario Perfil" component={Cadastro_Usuario_Perfil} />
        <Stack.Screen name="Exatas" component={Exatas} />
        <Stack.Screen name="Profissão" component={Profissao} />
        <Stack.Screen name="Lista de Mentor" component={List_Mentor} />
        <Stack.Screen name="Mentor" component={Mentor} />
        <Stack.Screen name="Candidato" component={Candidato} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

//<Stack.Screen name="Dashboard" component={Dashboard} />