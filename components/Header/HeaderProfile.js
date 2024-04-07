import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;

const HeaderProfile = ({ title, isDisplay = true }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={{marginTop: - windowWidth * 0.1}}>
        <Appbar.BackAction onPress={() => {navigation.goBack()}}/>
        <Appbar.Content title={title} titleStyle={{fontFamily: FONTFAMILY.ABeeZee,color: COLORS.secondary}}  />
        {
          isDisplay
          ?
          <View style={{ flexDirection: 'row', gap: -10 }}>
            <Appbar.Action  icon={({ color, size }) => (
        <Feather name={"edit"} color={COLORS.primary} size={size} />
        )}  onPress={() => navigation.navigate('UpdateProfileScreen')} style={{ marginHorizontal: 0 }} />
            <Appbar.Action icon={({ color, size }) => (
        <Fontisto name={"bell"} color={COLORS.primary} size={size} style={{ marginHorizontal: 0 }} />
        )} 
        onPress={() => navigation.navigate('Notification')} />
        </View>
          :
          <></>
        }

    </Appbar.Header>
  )
}

export default HeaderProfile