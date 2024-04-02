import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"

const TitleHeader = ({ title}) => {
  return (
    <Appbar.Header>
        <Appbar.Content title={title} titleStyle={{fontFamily: FONTFAMILY.ABeeZee,color: COLORS.secondary}}  />
    </Appbar.Header>
  )
}

export default TitleHeader