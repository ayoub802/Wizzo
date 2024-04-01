import { View, Text, TouchableOpacity, Dimensions, PixelRatio } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Ionicons from "react-native-vector-icons/Ionicons"
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ButtonBig = ({ title, Press }) => {

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    console.log("The Size of Width => ", windowWidth * 0.1, " The Size of Height => ", windowHeight * 0.038);
  return (
    <TouchableOpacity onPress={Press} style={{height: windowHeight * 0.08,justifyContent: "space-between",paddingHorizontal: windowWidth * 0.05 ,flexDirection: "row" ,alignItems: "center" ,width:"100%" ,backgroundColor: COLORS.primary, borderRadius: windowWidth * 0.035}}>
      <View></View>
        <Text style={{color: COLORS.white, fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", fontSize: getFontSize(16)}}>{title}</Text>
      <View style={{width: windowWidth * 0.075, height: windowHeight * 0.038,backgroundColor: COLORS.darkPrimary, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
         <Ionicons name="arrow-forward"  size={18} color="#fff"/>
      </View>

    </TouchableOpacity>
  )
}

export default ButtonBig