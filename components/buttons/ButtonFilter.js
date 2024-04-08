import { View, Text, TouchableOpacity, PixelRatio, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import Ionicons from "react-native-vector-icons/Ionicons"
import FilterAgenda from '../FilterModal/FilterAgenda';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ButtonFilter = ({sheetRef}) => {

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <>
      <TouchableOpacity onPress={() =>  sheetRef.current?.open()} style={{flexDirection: "row", alignItems: "center", gap: 8, borderRadius: 50, backgroundColor: COLORS.primary, paddingVertical: 8, paddingLeft: 8, paddingRight: 15}}>
        <View style={{width: windowWidth * 0.06, height: windowWidth * 0.06, borderRadius: 50,backgroundColor: COLORS.white, justifyContent: "center", alignItems:"center"}}>
          <Ionicons name='filter' color={COLORS.primary} size={15}/>
        </View>
        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(13)}}>Filtres</Text>
      </TouchableOpacity>
    </>
  )
}

export default ButtonFilter