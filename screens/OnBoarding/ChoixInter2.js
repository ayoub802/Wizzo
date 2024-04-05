import { View, Text, ScrollView, Image, StatusBar, Dimensions, PixelRatio, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Shape1, Shape2, Shape3 } from '../../constant/image'
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Feather from "react-native-vector-icons/Feather"
import Slider from "react-native-slider"
import ButtonOutline from '../../components/buttons/ButtonOutline';
import Button from '../../components/buttons/Button';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ChoixInter2 = ({ navigation }) => {
    const [value, setValue] = useState(20)

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
    <View style={{flex: 1, backgroundColor: "#fff", position: "relative"}}>

       <StatusBar translucent backgroundColor="transparent" />

           <View style={{position: "absolute",zIndex: -10,bottom: 0, left: 0}}>
             <Image source={Shape1} style={{width: 166, height: 153, objectFit: "cover"}}/>
           </View>

           <View style={{position: "absolute",zIndex: -10,bottom: 10, right: 0}}>
            <Image source={Shape2} style={{width: 249,height: 620, objectFit: "cover"}}/>
          </View>

          <View style={{position: "absolute",zIndex: -10,top: - windowWidth * .05, right: 0}}>
           <Image source={Shape3} style={{width: 227, height: 209, objectFit: "cover"}}/>
          </View> 
           <SafeAreaView style={{flex: 1,}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                <View style={{flex: 1, marginTop: windowWidth * 0.08, width: windowWidth * 0.9, alignSelf: "center"}}>
                    <View>
                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(24), marginBottom: windowWidth * 0.02}}>Localisation</Text>
                        <View style={{width: windowWidth * 0.7, alignSelf: "center"}}>
                          <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(15), lineHeight: windowWidth * 0.05}}>Sur quelle zone souhaitez-vous avoir les bons plans ?</Text>
                        </View>
                    </View>

                    <View style={{marginTop: windowWidth * 0.1, flexDirection: "row", alignItems: "center", gap: 5}}>
                        <TouchableOpacity>
                            <Text style={{fontSize: getFontSize(16), fontFamily: FONTFAMILY.ABeeZee, textDecorationLine: "underline", color: COLORS.primary,lineHeight: 36}}>Utiliser ma position</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: getFontSize(16), fontFamily: FONTFAMILY.ABeeZee,  color: COLORS.secondary,lineHeight: 36}}>
                         ou Chercher un lieu
                        </Text>
                    </View>
                     
                     <View style={{marginTop: windowWidth * 0.05}}>
                        <TouchableOpacity style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 15, paddingVertical: windowWidth * 0.018, paddingHorizontal: windowWidth * 0.018}}>
                            <View style={{backgroundColor: COLORS.primary_light, padding: 8, borderRadius: 15}}>
                                <View style={{backgroundColor: COLORS.white, padding: 8, borderRadius: 12}}>
                                   <Feather name="map-pin" size={20} color={COLORS.primary}/>
                                </View>
                            </View>
                            <View style={{marginRight: "auto", marginLeft: windowWidth * 0.08}}>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(16), color: COLORS.secondary}}>
                                Chateau Thierry , FRANCE
                                </Text>
                            </View>
                            <View>
                                <Feather name="chevron-right" size={20} color={COLORS.primary}/>
                            </View>
                        </TouchableOpacity>
                     </View>

                     <View style={{
                    // width: windowWidth * 0.09
                    marginTop: windowWidth * 0.15
                     }}>
                     <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: windowWidth * 0.1}}>
                       <Text style={{fontSize: getFontSize(16), fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary}}>A quelle distance ? </Text>
                       <Text style={{fontSize: getFontSize(18), fontFamily: FONTFAMILY.ABeeZee, color: "#3F38DD"}}>{parseInt(value)}Km</Text>
                     </View>
                     <Slider
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor={COLORS.white}
                        minimumTrackTintColor={COLORS.primary}
                        trackStyle={{
                            backgroundColor: COLORS.borderColor,
                            height: 3
                        }}
                        value={value}
                        thumbImage={require('../../assets/Images/map-pin.png')}
                        thumbStyle={{
                            width: 34,
                            height: 35,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            shadowOffset: {width: 0, height: 1},
                            shadowOpacity: 0.5,
                            shadowRadius: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        onValueChange={(value) => setValue(value)} />
                     </View>
                </View>

            </ScrollView>
                <View style={{justifyContent: "flex-end" ,marginBottom: windowHeight * 0.05}}>
                       <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(11), textAlign: "center", color: COLORS.secondary}}>Vous pourrez modifier vos choix à tout moment dans les réglages</Text>
                       <View style={{flexDirection:"row",gap: 15 ,justifyContent: "center", alignItems: "center", marginTop: windowWidth * 0.05, }}>
                        <ButtonOutline title={"Passer"} onPress={() => navigation.navigate('OnBorading1')}/>
                        <Button title={"Continuer"} onPress={() => navigation.navigate('OnBorading1')}/>
                       </View>
                    </View>
           </SafeAreaView>
           


    </View>
  )
}

export default ChoixInter2