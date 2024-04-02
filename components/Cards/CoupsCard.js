import { View, Text, Image, PixelRatio } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'

const CoupsCard = ({ item }) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <View style={{flexDirection: "row", alignItems: "flex-start", gap: 15, marginBottom: 25, flex: 1}}>
      <Image source={item.img} style={{}}/>
      <View>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 1}}>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(18)}}>{item.title}</Text>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#ADAFBB", fontSize: getFontSize(15)}}>{item.date}</Text>
        </View>
        <View style={{marginTop: 8, width: "90%"}}>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#000", fontSize: getFontSize(15), lineHeight: 25}}>{item.description}</Text>
        </View>
      </View>

    </View>
  )
}

export default CoupsCard