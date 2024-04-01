import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import { SafeAreaView} from "react-native-safe-area-context"

import AppNavigation from './navigation/AppNavigation';

const App = () => {
  // useEffect(() => {
  //   StatusBar.setBackgroundColor("#fff");
  //   StatusBar.setBarStyle("dark-content")
  // }, [])


  return (

        // <SafeAreaView style={{flex: 1}}>
          <AppNavigation />
        // </SafeAreaView>

  )
}

export default App