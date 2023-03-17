
import React from 'react';
import Details from './../screens/details/Detail';
import Home from '../screens/home/Home';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';









function Route(){

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name="Home" 
      component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
    
  )
}

export default Route;