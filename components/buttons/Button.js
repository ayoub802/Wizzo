import { View, Text, PixelRatio, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global';
const windowWidth = Dimensions.get("window").width;

const Button = ({ title, onPress}) => {

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: windowWidth * 0.07,backgroundColor: COLORS.primary ,paddingVertical: windowWidth * 0.032, borderRadius: 8}}>
      <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.white}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button