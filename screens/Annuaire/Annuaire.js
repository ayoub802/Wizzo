import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet, Modal, StatusBar, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleHeader from '../../components/Header/TitleHeader'
import Search from '../../components/Search/Search'
import TrieButton from '../../components/TrieButton/TrieButton'
import { annuaire } from '../../constant/data'
import AnnuaireCard from '../../components/Cards/AnnuaireCard'
import { FlashList } from "@shopify/flash-list";
import FilterAgenda from '../../components/FilterModal/FilterAgenda'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Annuaire = ({ navigation }) => {
  const sheetRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
       StatusBar.setBackgroundColor('#fff')
       StatusBar.setBarStyle('dark-content')
    }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, backgroundColor:"#fff"}}>
                <TitleHeader styleTop={- windowWidth * 0.1} title={"Annuaire"} />
                <View style={{width: windowWidth * 0.85, alignSelf:"center"}}>
                    <View style={{marginTop: 10}}>
                      <Search plceholderTitle={"Rechercher"} sheetRef={sheetRef}/>
                    </View>

                    <View style={{marginTop: 10, alignItems: "flex-end"}}> 
                         <TrieButton /> 
                    </View>

                    <View style={{marginTop: 20}}>
                       <FlashList 
                        data={annuaire}
                        renderItem={({item}) => <AnnuaireCard item={item}/>}
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

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 15,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default Annuaire