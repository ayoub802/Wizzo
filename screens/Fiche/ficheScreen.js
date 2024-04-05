import { View, Text, ScrollView, Dimensions, Image, StatusBar, Touchable, TouchableOpacity, PixelRatio } from 'react-native'
import React from 'react'
import { Annuaire1, Annuaire2, Calendar, FichBanner } from '../../constant/image';
import { useIsFocused } from "@react-navigation/core";
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Ionicons from "react-native-vector-icons/Ionicons"
import {FlashList} from '@shopify/flash-list';
import { Camp, fichInfo } from '../../constant/data';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Octicons from "react-native-vector-icons/Octicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import { BlurView } from "@react-native-community/blur";
import CampImage from '../../components/Camp/Camp';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const FichScreen = () => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    const Headertop = () => {
        return(
            <View style={{width: "100%", height: windowHeight * .28,position: "relative"}}>
               <View style={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", backgroundColor: "#000", zIndex: 100, opacity: 0.4}}>
               </View>
                   <View style={{flexDirection: "row",alignItems: "center" ,width: "100%" , justifyContent: "space-between" ,position: "absolute",zIndex: 100, top: StatusBar.currentHeight + 8, maxWidth: windowWidth * 0.9, alignSelf: "center"}}>
                      <View style={{flexDirection: "row", gap: 12}}>
                         <TouchableOpacity>
                              <Ionicons name='arrow-back-outline' color={COLORS.white} size={windowWidth * 0.05}/>

                         </TouchableOpacity>
                         <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(18)}}>Fiche entreprise</Text>
                      </View>
                      <View style={{flexDirection: "row",  gap: 10}}>
                        <TouchableOpacity  style={{width: windowWidth * 0.08,position: "relative" , height: windowWidth * 0.08,justifyContent: "center", alignItems: "center", borderRadius: 12, backgroundColor: "rgba(255, 255, 255, 0.30)",}}>
                             <Octicons name='share' color={COLORS.white} size={22}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{width: windowWidth * 0.08,position: "relative" , height: windowWidth * 0.08,justifyContent: "center", alignItems: "center", borderRadius: 12, backgroundColor: "rgba(255, 255, 255, 0.30)",}}>
                             <Ionicons name='heart-sharp' color={COLORS.white} size={22}/>
                        </TouchableOpacity>
                      </View>
                   </View>
                <Image 
                        source={FichBanner}       
                        resizeMode="cover"
                        style={{ width: "100%", height: "100%", position: "relative", zIndex: 10 }}/>
                <View style={{position: "absolute", bottom: - windowWidth * 0.07, backgroundColor: "#fff",elevation: 5 ,borderRadius: 100, paddingHorizontal: windowWidth * 0.04, justifyContent: "center", alignItems: "center",left: "15%", paddingVertical: windowWidth * 0.025 ,zIndex: 100}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 15}}>
                        <View style={{flexDirection: "row"}}>
                            {
                                Camp.map((item, index) => (
                                    <CampImage imgUrl={item.image} index={index} key={index}/>
                                ))
                            }
                        </View>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.primary, fontSize: getFontSize(10)}}>+20 pers. les suivent</Text>
                        <TouchableOpacity style={{paddingHorizontal: windowWidth * 0.04, paddingVertical: windowWidth * 0.02, backgroundColor: COLORS.primary, borderRadius: 8}}>
                            <Text style={{color: COLORS.white, fontFamily: FONTFAMILY.ABeeZee}}>Suivre</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    } 

    const RenderInfo = ({item}) =>{
        return(
            <View style={{flexDirection: "row", alignItems: "center", gap: windowWidth * 0.02, marginBottom: windowWidth * 0.05}}>
            <View style={{width: windowWidth * 0.1, height: windowWidth * 0.1, borderRadius: 13, backgroundColor: "#5669FF10", justifyContent: "center", alignItems: "center"}}>
                {
                    item.id == 1
                    ?
                    <Image source={item.icon} style={{width: windowWidth * 0.05, height: windowWidth * 0.055}}/>
                    :
                    <>
                        {item.icon}
                    </>
                }
            </View>
            <View>
                <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(12)}}>{item.title}</Text>
                {
                    (item.hour != "" ||  item.hour2 != "")
                    ?
                    <>
                    <View style={{marginTop: windowWidth * 0.01}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#747688", fontSize: getFontSize(10)}}>{item.hour}</Text>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#747688", fontSize: getFontSize(10)}}>{item.hour2}</Text>
                    </View>
                    </>
                    :
                    <></>
                }
                {
                    item.address != ""
                    ?
                    <>
                    <View style={{marginTop: windowWidth * 0.01}}>
                       <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#747688", fontSize: getFontSize(10)}}>{item.address}</Text>
                    </View>
                    </> 
                    :
                    <></>
                }
            </View>
        </View>
        )
    }

    const planImage = [
        {
            id: 1,
            image: Annuaire1
        },
        {
            id: 2,
            image: Annuaire2
        },
        {
            id: 3,
            image: Annuaire1
        },
        {
            id: 4,
            image: Annuaire2
        },
    ]

    const FocusedStatusBar = (props) => {
        const isFocused = useIsFocused();
      
        return isFocused ? <StatusBar animated={true} {...props} /> : null;
      };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <FocusedStatusBar
        barStyle="light"
        backgroundColor="transparent"
        translucent={true}
        />
      <Headertop />
      <View style={{flex: 1,backgroundColor: "#fff"}}>
         <View style={{width: windowWidth * 0.9, alignSelf: "center"}}>
           <View style={{marginTop: windowWidth * 0.1}}>
              <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(35)}}>La Carte'rit</Text>

              <View style={{marginTop: windowWidth * 0.04}}>
                <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(16), lineHeight: 28}}>
                   Nous vous proposons des cartes originales pour toutes vos occasion : anniversaire, baptêmes, mariages ...
                </Text>
              </View>

              <View style={{marginTop: windowWidth * 0.04}}>
                  <FlashList 
                    data={fichInfo}
                    estimatedItemSize={200}
                    numColumns={2}
                    renderItem={({item}) => <RenderInfo item={item}/>}
                  />
              </View>
              <View style={{marginTop: windowWidth * 0.04}}>
                 <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(18)}}>Les bons plans du moment</Text>
                 <ScrollView horizontal={true} style={{marginTop: windowWidth * 0.04}} showsHorizontalScrollIndicator={false}>
                      {
                        planImage.map((obj, index)=> (
                            <View key={index} style={{marginLeft: 10}}>
                              <Image source={obj.image} style={{width: windowWidth * 0.25, height: windowWidth * 0.35, borderRadius: windowWidth * 0.025, objectFit: "cover"}}/>
                            </View>
                        ))
                      }
                 </ScrollView>
              </View>
           </View>
         </View>
      </View>
    </ScrollView>
  )
}

export default FichScreen