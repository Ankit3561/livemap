import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Login/Login';
import Singup from '../Screen/Singup/Singup';
import Home from '../Screen/Home/Home';
import BottamNavigation from './BottamNavigation';


const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Login'}>
 <Stack.Screen
            name={'Login'}
            component={Login} 
          />
           <Stack.Screen
            name={'Singup'}
            component={Singup}
          />
          <Stack.Screen
            name={'BottamNavigation'}
            component={BottamNavigation}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})