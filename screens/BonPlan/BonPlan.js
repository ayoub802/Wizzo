import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet, Modal, StatusBar, PixelRatio, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleHeader from '../../components/Header/TitleHeader'
import Search from '../../components/Search/Search'
import TrieButton from '../../components/TrieButton/TrieButton'
import {  bonPlan } from '../../constant/data'
import { FlashList } from "@shopify/flash-list";
import { COLORS, FONTFAMILY } from '../../styles/Global'
import BonPlanCard from '../../components/Cards/BonPlanCard'
import FilterAgenda from '../../components/FilterModal/FilterAgenda'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const BonPlan = ({ navigation }) => {
    const sheetRef = useRef(null);

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
    <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
            <View style={{flex: 1, backgroundColor:"#fff"}}>
                <TitleHeader  styleTop={- windowWidth * 0.1} title={"Bons plans"} />
                <View style={{width: windowWidth * 0.85, alignSelf:"center"}}>
                    <View style={{marginVertical: 10, flexDirection: "row",justifyContent: "center" ,alignItems: "center", gap: 8}}>
                        {
                          plansCategorie.map((obj, i) => (
                            <TouchableOpacity key={i} style={{width: 120,justifyContent: "center", alignItems: "center" ,paddingVertical: 15, backgroundColor: obj.bgColor, borderRadius: 50}}>
                                <Text style={{textAlign: "center",fontSize: getFontSize(12) ,fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white}}>{obj.title}</Text>
                            </TouchableOpacity>
                          ))   
                        }
                    </View>
                    <View style={{marginTop: 10}}>
                      <Search sheetRef={sheetRef} plceholderTitle={"Rechercher"}/>
                    </View>

                    <View style={{marginTop: 10, alignItems: "flex-end"}}>
                         <TrieButton top={windowHeight * .285}/> 
                    </View>

                    <View style={{marginTop: 20}}>
                       <FlashList 
                        data={bonPlan}
                        renderItem={({item}) => <BonPlanCard navigation={navigation} item={item}/>}
                        estimatedItemSize={200}
                       />
                    </View>
                </View>


            </View>
        </ScrollView>

        <FilterAgenda sheetRef={sheetRef}/>
    </SafeAreaView>
  )
}


export default BonPlan