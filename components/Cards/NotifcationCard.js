import { View, Text, Platform, Image, PixelRatio, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const NotifcationCard = ({item}) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <View style={{flexDirection: "row",flex: 1, marginBottom: windowWidth * 0.05,justifyContent: "space-between", position: "relative" ,alignItems: "center",backgroundColor: COLORS.white, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 12,    shadowColor: '#000',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,}}>
      <View style={{position: "absolute", zIndex: 10, top: 13, right: 20}}>
        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.primary, fontSize: getFontSize(10)}}>{item.date}</Text>
      </View>
      <View>
        <Image source={item.img} style={{width: 90, height: 110, borderRadius: 10}}/>
      </View>
      <View style={{width: windowWidth * 0.3,marginRight: "auto", marginLeft: 25 }}>
         <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.primary}}>{item.title}</Text>
         <View style={{marginTop: 10}}>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, }}>{item.address}</Text>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, lineHeight: 20}}>{item.phone}</Text>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, lineHeight: 20}}>{item.site}</Text>
         </View>
      </View>
      <View style={{flex: 1, flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", height: "80%", paddingRight: 2}}>
        <TouchableOpacity style={{backgroundColor: COLORS.primary, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 10}}>
          <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(10)}}>{item.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NotifcationCard