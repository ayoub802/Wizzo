import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoarding from '../screens/OnBoarding/OnBoarding'
import ChoixInter1 from '../screens/OnBoarding/ChoixInter1'
import ChoixInter2 from '../screens/OnBoarding/ChoixInter2'
import OnBoardin1 from '../screens/OnBoarding/OnBoarding1'
import Login from '../screens/Account/Login'
import Inscriptions from '../screens/Account/Inscriptions'
import Verification from '../screens/Account/Verification'
import ResetPassword from '../screens/Account/ResetPassword'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import UpdateProfileScreen from '../screens/Profile/UpdateProfileScreen'
import Notification from '../screens/Notification/Notification'


const AppNavigation = () => {
    
    const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Notification' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='OnBorading' component={OnBoarding}/>
            <Stack.Screen name='Choix' component={ChoixInter1}/>
            <Stack.Screen name='Choix2' component={ChoixInter2}/>
            <Stack.Screen name='OnBorading1' component={OnBoardin1}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Inscription' component={Inscriptions}/>
            <Stack.Screen name='Verification' component={Verification}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword}/>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
            <Stack.Screen name='UpdateProfileScreen' component={UpdateProfileScreen}/>
            <Stack.Screen name='Notification' component={Notification}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}



export default AppNavigation