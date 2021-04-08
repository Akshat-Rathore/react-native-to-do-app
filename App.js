/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Stage1 from './Stage1.js';
import Main from './Main.js';
import Form from './Form.js';

const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stage1">
        <Stack.Screen name="Manage Your Notes" component={Stage1}/> 
        <Stack.Screen name="Notes App" component={Main} />       
        <Stack.Screen name="Create Notes" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;