import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import frango from './frango';
import iniciante from './iniciante';
import carcacinha from './carcacinha';
import monstro from './monstro';
import sobre from './sobre';

const Stack = createStackNavigator();

function MeuApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="frango" component= {frango} />
        <Stack.Screen name="iniciante" component={iniciante} />
        <Stack.Screen name="carcacinha" component={carcacinha} />
        <Stack.Screen name="monstro" component={monstro} />
        <Stack.Screen name="sobre" component={sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MeuApp;