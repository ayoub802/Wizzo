import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet, Modal, StatusBar, PixelRatio, Image, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleHeader from '../../components/Header/TitleHeader'
import Search from '../../components/Search/Search'
import TrieButton from '../../components/TrieButton/TrieButton'
import {  bonPlan, filterCategories, filterDate } from '../../constant/data'
import { FlashList } from "@shopify/flash-list";
import { COLORS, FONTFAMILY } from '../../styles/Global'
import Pub from '../../components/Pub/Pub'
import AgendaCard from '../../components/Cards/AgendaCard'
import BottomSheet from '@devvie/bottom-sheet'
import { Calendar } from '../../constant/image'
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import Slider from "react-native-slider"
import Button from '../../components/buttons/Button'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Agenda = () => {
    const [value, setValue] = useState(20)
    const sheetRef = useRef(null);
    const [isClick, setIsClick] = useState(null)

    const [modalVisible, setModalVisible] = useState(false);
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    const plansCategorie = [
        {
            id: 1,
            title: "Pour moi",
            bgColor: COLORS.redColor
        },
        {
            id: 2,
            title: "Dernière minute",
            bgColor: COLORS.orangeColor
        },
        {
            id: 3,
            title: "Nouveau",
            bgColor: COLORS.greenlightColor
        },
    ]

    useEffect(() => {
       StatusBar.setBackgroundColor('#fff')
       StatusBar.setBarStyle('dark-content')
    }, [])

  return (
    <>
        <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
                <View style={{flex: 1, backgroundColor:"#fff"}}>
                    <TitleHeader title={"Agenda"} />
                    <View style={{width: windowWidth * 0.85, alignSelf:"center"}}>
                        <View style={{marginTop: 10}}>
                        <Search plceholderTitle={"Rechercher"} sheetRef={sheetRef}/>
                        </View>

                        <View style={{marginTop: 10, alignItems: "flex-end"}}>
                            <TrieButton /> 
                        </View>

                        <Pub />

                        <View style={{marginTop: 20}}>
                        <FlashList 
                            data={bonPlan}
                            renderItem={({item}) => <AgendaCard item={item}/>}
                            estimatedItemSize={200}
                        />
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView> 
        <BottomSheet style={{backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20}} height={windowHeight * .8} backdropMaskColor={"#00000090"}  ref={sheetRef}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TitleHeader title={"Filters"} />
                    <View style={{marginTop: windowWidth * 0.01, marginBottom: windowWidth * 0.05, marginLeft: windowWidth * 0.03}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                filterCategories.map((item, index) => (
                                    <TouchableOpacity style={{marginRight: 20, justifyContent: "center", alignItems: "center", gap: 5}}>
                                    <View style={{width: windowWidth * 0.2, height: windowWidth * 0.2, borderRadius: 100,  borderWidth: 1, borderColor: COLORS.borderColor}}></View>
                                        <Text>{item.title}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={{marginTop: windowWidth * 0.02, width: windowWidth * 0.9, alignSelf: "center"}}>
                       <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(17)}}>Quand</Text>
                        <View style={{marginTop: windowWidth * 0.02, marginBottom: windowWidth * 0.06}}> 
                            <View style={{flexWrap: "wrap", gap: 15, flexDirection: "row"}}>
                                {
                                    filterDate.map((obj ,i) => (
                                        <TouchableOpacity key={i} onPress={() => setIsClick(i)} style={{borderRadius: 10, borderWidth: 1, borderColor: COLORS.borderColor, paddingHorizontal: 18, paddingVertical: 15, backgroundColor: isClick === i ? COLORS.primary : "#fff"}}>
                                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: isClick === i ? COLORS.white : "#807A7A", fontSize: getFontSize(13)}}>{obj.title}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                            <TouchableOpacity style={{borderWidth: 1,marginTop: windowWidth * 0.035 ,borderColor: COLORS.borderColor, width: "70%", borderRadius: 8, paddingHorizontal: 16, paddingVertical: 9, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Image source={Calendar} style={{width: windowWidth * 0.055, height: windowHeight * 0.031}}/>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee,color: "#807A7A", fontSize: getFontSize(13)}}>Choisir une date</Text>
                                <Entypo name='chevron-small-right' color={COLORS.primary} size={20}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(17)}}>Lieux</Text>
                            <View style={{marginTop: windowWidth * 0.01, flexDirection: "row", alignItems: "center",justifyContent: "center" ,gap: 5}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize: getFontSize(16), fontFamily: FONTFAMILY.ABeeZee, textDecorationLine: "underline", color: COLORS.primary,lineHeight: 36}}>Utiliser ma position</Text>
                                </TouchableOpacity>
                                <Text style={{fontSize: getFontSize(16), fontFamily: FONTFAMILY.ABeeZee,  color: COLORS.secondary,lineHeight: 36}}>
                                ou Chercher un lieu
                                </Text>
                            </View>

                            <View style={{marginTop: windowWidth * 0.035}}>
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
                            marginTop: windowWidth * 0.045
                            }}>
                                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: windowWidth * 0.05}}>
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

                            <View style={{flexDirection: "row", alignItems: "center",justifyContent: "center" ,gap: 25, marginTop: windowWidth * 0.05,marginBottom: windowWidth * 0.14,}}>
                                <TouchableOpacity style={{paddingHorizontal: windowWidth * 0.07,backgroundColor: COLORS.white ,paddingVertical: windowWidth * 0.052, borderRadius: 8,  borderWidth: 1, borderColor: COLORS.borderColor}}>
                                  <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.secondary, textTransform: "uppercase"}}>supprimer</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{paddingHorizontal: windowWidth * 0.07,backgroundColor: COLORS.primary ,paddingVertical: windowWidth * 0.052, borderRadius: 8,}}>
                                  <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.white, textTransform: "uppercase"}}>appliquer</Text>
                                </TouchableOpacity>
                            </View>

                    </View>
                </ScrollView>
        </BottomSheet>
    </>
  )
}


export default Agenda