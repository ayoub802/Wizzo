import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
const HeaderProfile = ({ title }) => {
  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => {}}/>
        <Appbar.Content title={title} titleStyle={{fontFamily: FONTFAMILY.ABeeZee,color: COLORS.secondary}}  />
        <View style={{ flexDirection: 'row', gap: -10 }}>
            <Appbar.Action  icon={({ color, size }) => (
        <Feather name={"edit"} color={COLORS.primary} size={size} />
        )}  onPress={() => {}} style={{ marginHorizontal: 0 }} />
            <Appbar.Action icon={({ color, size }) => (
        <Fontisto name={"bell"} color={COLORS.primary} size={size} style={{ marginHorizontal: 0 }} />
        )} 
        onPress={() => {}} />
        </View>
    </Appbar.Header>
  )
}

export default HeaderProfile