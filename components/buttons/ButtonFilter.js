import { View, Text, TouchableOpacity, PixelRatio, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import Ionicons from "react-native-vector-icons/Ionicons"
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ButtonFilter = () => {
    
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 8, borderRadius: 50, backgroundColor: COLORS.primary, paddingVertical: 8, paddingLeft: 8, paddingRight: 15}}>
      <View style={{width: windowWidth * 0.06, height: windowWidth * 0.06, borderRadius: 50,backgroundColor: COLORS.white, justifyContent: "center", alignItems:"center"}}>
        <Ionicons name='filter' color={COLORS.primary} size={15}/>
      </View>
      <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(13)}}>Filters</Text>
    </TouchableOpacity>
  )
}

export default ButtonFilter