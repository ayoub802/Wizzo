import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoarding from '../screens/OnBoarding/OnBoarding'
import ChoixInter1 from '../screens/OnBoarding/ChoixInter1'
import ChoixInter2 from '../screens/OnBoarding/ChoixInter2'
import OnBoardin1 from '../screens/OnBoarding/OnBoarding1'
import Login from '../screens/Account/Login'


const AppNavigation = () => {
    
    const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName='OnBorading' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='OnBorading' component={OnBoarding}/>
            <Stack.Screen name='Choix' component={ChoixInter1}/>
            <Stack.Screen name='Choix2' component={ChoixInter2}/>
            <Stack.Screen name='OnBorading1' component={OnBoardin1}/>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}



export default AppNavigation