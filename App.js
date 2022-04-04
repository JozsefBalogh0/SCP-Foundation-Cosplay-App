import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home'
import Acheron from './pages/acheron'
import Alma from './pages/alma'
import 'expo-dev-client';



const Stack = createNativeStackNavigator()





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Acheron_Fox" component={Acheron}></Stack.Screen>
        <Stack.Screen name="Alma" component={Alma}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
