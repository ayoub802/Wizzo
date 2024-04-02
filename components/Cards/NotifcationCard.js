import { View, Text, Platform, Image, PixelRatio, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const NotifcationCard = ({item}) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <View style={{flexDirection: "row",justifyContent: "space-between" ,alignItems: "center",backgroundColor: "#fff", borderRadius: 8, padding: 8, ...Platform.select({
        ios: {
          shadowColor: '#52588F',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.07,
          shadowRadius: 25,
        },
        android: {
          elevation: 5,
        },
      }),}}>
      <View>
        <Image source={item.img} style={{width: 80, height: 92, borderRadius: 10}}/>
      </View>
      <View style={{width: windowWidth * 0.3,marginRight: "auto", marginLeft: 25 }}>
         <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.primary}}>{item.title}</Text>
         <View style={{marginVertical: 10}}>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, lineHeight: 15}}>{item.address}</Text>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, lineHeight: 15}}>{item.phone}</Text>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, lineHeight: 15}}>{item.site}</Text>
         </View>
      </View>
      <View style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </View>
  )
}

export default NotifcationCard