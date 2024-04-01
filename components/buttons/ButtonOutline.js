import { View, Text, TouchableOpacity, Dimensions, PixelRatio } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global';
const windowWidth = Dimensions.get("window").width;

const ButtonOutline = ({ title}) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <TouchableOpacity style={{borderWidth: 1 ,borderColor: COLORS.primary, paddingHorizontal: windowWidth * 0.07, paddingVertical: windowWidth * 0.032, borderRadius: 8}}>
      <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.primary}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonOutline