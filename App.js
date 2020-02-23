import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Pantalla from './screen/Pantalla';

const Stack = createStackNavigator();

const App: () => React$Node = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registro' component={Registro} />
        <Stack.Screen name='Pantalla' component={Pantalla} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;