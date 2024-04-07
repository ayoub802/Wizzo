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
import FilterAgenda from '../../components/FilterModal/FilterAgenda'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Agenda = ({navigation}) => {
    const [value, setValue] = useState(20)
    const sheetRef = useRef(null);
    const [isClick, setIsClick] = useState(null)
    const [isCategClick, setIsCategClick] = useState(null)

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
                    <TitleHeader styleTop={- windowWidth * 0.1} title={"Agenda"} />
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
            <FilterAgenda sheetRef={sheetRef}/>
        </SafeAreaView> 
    

    </>
  )
}


export default Agenda