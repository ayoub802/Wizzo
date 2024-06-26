import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"

const TitleHeader = ({ title, styleTop,fontFamily = fontFamily}) => {
  return (
    <Appbar.Header style={{marginTop: styleTop}}>
        <Appbar.Content title={title} titleStyle={{fontFamily: fontFamily,color: COLORS.secondary}}  />
    </Appbar.Header>
  )
}

export default TitleHeader