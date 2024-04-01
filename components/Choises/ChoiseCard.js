import { View, Text, TouchableOpacity, Image, PixelRatio } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global';
import AntDesign from "react-native-vector-icons/AntDesign"
const ChoiseCard = ({ item, onPress, selectedLanguage }) => {

  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor: selectedLanguage.find(selectedItem => selectedItem.id === item.id) ? COLORS.borderColor : item.color,height: 85, width: 90,marginBottom: 50 ,borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 5, position: "relative"}}>
          {
            selectedLanguage.find(selectedItem => selectedItem.id === item.id)
            ?
            <View style={{position: "absolute", top: 5, right: 7}}>
                <AntDesign name="checkcircleo" color={COLORS.greenlightColor} size={10}/>
            </View>
            :
            <></>
          }
          <Image source={selectedLanguage.find(selectedItem => selectedItem.id === item.id) ? item.iconBlue : item.icon}/>
          <Text style={{color: selectedLanguage.find(selectedItem => selectedItem.id === item.id) ? COLORS.primary : COLORS.white, fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12)}}>{item.title}</Text>
        </TouchableOpacity>
  )
}

export default ChoiseCard