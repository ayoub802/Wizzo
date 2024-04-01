import { View, Text, StatusBar, Dimensions, PixelRatio } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Button  } from 'react-native-paper';
import { Platform } from 'react-native';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Message from "../../assets/icons/message.png"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import HeaderProfile from '../../components/Header/HeaderProfile';
import { ProfileUser } from '../../constant/image';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = () => {

    const bell = <Fontisto name="bell" size={20} color="#000"/>
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    useEffect(() => {
       StatusBar.setBackgroundColor("#fff")
       StatusBar.setBarStyle("dark-content")
    }, [])
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1,backgroundColor: "#fff"}}>
           <HeaderProfile title={"Profil"}/>

           <View style={{flex: 1, width: windowWidth * 0.9, alignSelf: "center", marginTop: windowWidth * 0.01}}>
              <View style={{justifyContent: "center", alignItems: "center"}}>
                <Avatar.Image size={100} source={ProfileUser} />
                <View style={{marginTop: windowWidth * 0.02}}>
                   <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(20)}}>Mathieu Seguin</Text>
                </View>
              </View>

              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: windowWidth * 0.07}}>
                <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(18)}}>Mes centres d’interêts</Text>

                <Button icon="camera" mode="contained" style={{backgroundColor:  COLORS.borderColor}} onPress={() => console.log('Pressed')}>
                  Press me
                </Button>
              </View>
           </View>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen