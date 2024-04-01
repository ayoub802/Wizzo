import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../styles/Global'
const BackHeader = ({ navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" color={COLORS.secondary} size={25}/>
    </TouchableOpacity>
  )
}

export default BackHeader