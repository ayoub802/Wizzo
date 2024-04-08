import { View, Text, Platform, Image, PixelRatio, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const BonPlanCard = ({item, navigation}) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    const [changeHeart, setChangeHeart] = useState(false)
  return (
    <View style={{flexDirection: "row",flex: 1, marginBottom: windowWidth * 0.05,gap: 20 ,position: "relative" ,alignItems: "center",backgroundColor: COLORS.white, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 12,    shadowColor: '#000',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,}}>

        <View>
            <Image source={item.img} style={{width: 90, height: 110, borderRadius: 10}}/>
        </View>
        <View style={{width: windowWidth * 0.51, alignSelf: "center"}}>
            <View style={{marginTop: 10, flex: 1, justifyContent: "space-between", alignItems: "flex-start", flexDirection: "row"}}>
                <View style={{width: "60%"}}>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.primary}}>{item.title}</Text>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(11), color: COLORS.secondary, lineHeight: 18, marginVertical: 8}}>{item.address}</Text>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.secondary, lineHeight: 20}}>{item.remise}</Text>
                </View>
                <View style={{flexDirection: "column", gap: 15}}>
                <View style={{alignItems: "center"}}>
                    <TouchableOpacity onPress={() => setChangeHeart(!changeHeart)}>
                    {
                        changeHeart
                        ? 
                        <Ionicons name='heart-sharp' color={COLORS.primary} size={25}/>
                        :
                        <Ionicons name='heart-outline' color={COLORS.primary} size={25}/>
                    }
                    </TouchableOpacity>
                </View>
                    <View style={{width: "70%"}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.primary,textAlign: "right" ,fontSize: getFontSize(10)}}>{item.date}</Text>
                    </View>
                    <View style={{justifyContent: "center", alignItems: "center", gap: 3}}>
                        <TouchableOpacity onPress={() => navigation.navigate('FichBon')} style={{backgroundColor: COLORS.primary, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 10}}>
                           <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(10)}}>En profiter</Text>
                        </TouchableOpacity>          
                    </View>
                </View>
        </View>
      </View>
    </View>
  )
}

export default BonPlanCard