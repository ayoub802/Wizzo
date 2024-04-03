import { View, Text, Platform, Image, PixelRatio, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import Feather from "react-native-vector-icons/Feather"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const AnnuaireCard = ({item}) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <View style={{flexDirection: "row",flex: 1, marginBottom: windowWidth * 0.05, position: "relative" ,alignItems: "center",backgroundColor: COLORS.white, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 12,    shadowColor: '#000',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,}}>
        <View style={{position: "absolute", zIndex: 10, top: 13, right: 20}}>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.primary, fontSize: getFontSize(10)}}>{item.date}</Text>
        </View>
        <View>
            <Image source={item.img} style={{width: 90, height: 110, borderRadius: 10}}/>
        </View>
        <View style={{width: windowWidth * 0.5,marginRight: "auto", marginLeft: 25 }}>
                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.primary}}>{item.title}</Text>
                <View style={{marginTop: 10, flex: 1, justifyContent: "space-between", alignItems: "flex-start", flexDirection: "row"}}>
                    <View style={{width: "60%"}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, }}>{item.address}</Text>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, lineHeight: 20}}>{item.phone}</Text>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(12), color: COLORS.secondary, lineHeight: 20}}>{item.site}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center", gap: 3}}>
                       <View>
                         <Feather name='map-pin' size={20} color={COLORS.primary}/>
                       </View>
                       <Text style={{color: COLORS.primary, fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(11)}}>{item.kilometrag}km</Text>
                    </View>
            </View>
      </View>
    </View>
  )
}

export default AnnuaireCard