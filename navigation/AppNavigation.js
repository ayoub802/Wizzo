import { View, Text, TouchableOpacity, Dimensions, PixelRatio } from 'react-native'
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
import Annuaire from '../screens/Annuaire/Annuaire'
import BonPlan from '../screens/BonPlan/BonPlan'
import Agenda from '../screens/Agenda/Agenda'
import SearchScreen from '../screens/Search/SearchScreen'
import FichScreen from '../screens/Fiche/ficheScreen'
import FichBon from '../screens/Fiche/FichBon'
import FichEvnement from '../screens/Fiche/FichEvnement'
import HomeScreen from '../screens/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { COLORS, FONTFAMILY } from '../styles/Global'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
            <Stack.Screen name='Inscription' component={Inscriptions}/>
            <Stack.Screen name='Verification' component={Verification}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword}/>
            {/* <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
            <Stack.Screen name='UpdateProfileScreen' component={UpdateProfileScreen}/>
            <Stack.Screen name='Notification' component={Notification}/>
            <Stack.Screen name='Annuaire' component={Annuaire}/>
            <Stack.Screen name='BonPlan' component={BonPlan}/>
            <Stack.Screen name='Agenda' component={Agenda}/>
            <Stack.Screen name='SearchScreen' component={SearchScreen}/>
            <Stack.Screen name='FichScreen' component={FichScreen}/>
            <Stack.Screen name='FichBon' component={FichBon}/>
            <Stack.Screen name='FichEvnement' component={FichEvnement}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/> */}
            <Stack.Screen name='MyTabs' component={MyTabs}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}

function MyTabs() {
  const Tab = createBottomTabNavigator();
  const Home = createBottomTabNavigator();
  const Plan = createBottomTabNavigator();
  const Annu = createBottomTabNavigator();
  const Event = createBottomTabNavigator();
  const Prof = createBottomTabNavigator();
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
<Tab.Navigator
     screenOptions={{
      headerShown: false,
      // tabBarStyle: {
      //     height: windowHeight * 0.08,
      //     paddingTop: windowWidth * 0.025,
      //     backgroundColor: '#fff',
      //     paddingBottom: windowWidth * 0.02,
      //   },
      tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: windowHeight * 0.08,
          backgroundColor: '#fff',
          paddingBottom: windowWidth * 0.02,
          paddingTop: windowWidth * 0.025,
          zIndex: 1
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#2C355030',
        tabBarLabelStyle: {
          fontFamily: FONTFAMILY.ABeeZee,
          fontSize: getFontSize(10)
        }
     }}
    >
      <Tab.Screen
        name='Home'
        // component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              size={24}
              color={focused ? COLORS.primary : '#2C355030'}
            />
          ),
        }}
      >
              {
          () => (
            <Home.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
              <Home.Screen name="Home" component={HomeScreen} />
            </Home.Navigator>
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name='Annuaire'
        // component={Annuaire}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="contacts"
              size={24}
              color={focused ? COLORS.primary : '#2C355030'}
            />
          ),
        }}
      >
        {
          () => (
            <Annu.Navigator initialRouteName='Annuaire' screenOptions={{ headerShown: false}}>
              <Annu.Screen name="Annuaire" component={Annuaire} />
              <Annu.Screen name="FichAnnuaire" component={FichScreen} />
            </Annu.Navigator>
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name='Bon plans'
        // component={BonPlan}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="discount"
              size={24}
              color={focused ? COLORS.primary : '#2C355030'}
            />
          ),
        }}
      >
              {
          () => (
            <Plan.Navigator initialRouteName='BonPlans' screenOptions={{ headerShown: false}}>
              <Plan.Screen name="BonPlans" component={BonPlan} />
              <Plan.Screen name="FichBon" component={FichBon} />
            </Plan.Navigator>
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name='Agenda'
        // component={Agenda}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="calendar-outline"
              size={24}
              color={focused ? COLORS.primary : '#2C355030'}
            />
          ),
        }}
      >
       {
          () => (
            <Event.Navigator initialRouteName='Agenda' screenOptions={{ headerShown: false}}>
              <Event.Screen name="Agenda" component={Agenda} />
              <Event.Screen name="FichAgenda" component={FichEvnement} />
            </Event.Navigator>
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name='Profil'
        // component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="user"
              size={24}
              color={focused ? COLORS.primary : '#2C355030'}
            />
          ),
        }}
      >
       {
          () => (
            <Prof.Navigator initialRouteName='Profil' screenOptions={{ headerShown: false}}>
              <Prof.Screen name="Profil" component={ProfileScreen} />
              <Prof.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} />
              <Prof.Screen name="Notification" component={Notification} />
            </Prof.Navigator>
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}



export default AppNavigation