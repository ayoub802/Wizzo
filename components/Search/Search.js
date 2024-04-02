import { View, Text, Image, TextInput, PixelRatio } from 'react-native'
import React from 'react'
import { SearchIcon } from '../../constant/image'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import ButtonFilter from '../buttons/ButtonFilter'

const Search = ({ plceholderTitle }) => {

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <View style={{flexDirection: "row",gap: 5 , alignItems: "center",flex: 1, width: "100%"}}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 12}}>
            <Image source={SearchIcon}/>
            <View style={{width: 1.15, backgroundColor: COLORS.primary, height: 30}}></View>
        </View>
        <View style={{flex: 1}}>
            <TextInput 
            placeholder={plceholderTitle}
            placeholderTextColor={"#00000030"}
            style={{width: "100%", fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(24)}}
            />
        </View>
        <View>
            <ButtonFilter />
        </View>
    </View>
  )
}

export default Search