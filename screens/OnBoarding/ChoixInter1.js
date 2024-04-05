import { View, Text, StatusBar, Image, Dimensions, PixelRatio, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactNativeItemSelect from 'react-native-item-select';
import { Shape1, Shape2, Shape3 } from '../../constant/image'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import ChoiseCard from '../../components/Choises/ChoiseCard';
import { categories } from '../../constant/data';
import ButtonOutline from '../../components/buttons/ButtonOutline';
import Button from '../../components/buttons/Button';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ChoixInter1 = ({ navigation }) => {

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    const [selectAll, setSelectAll] = useState(false);
  
    const [selectedLanguage, setSelectedLanguage] = useState([]);
    const [numColumns, setNumColumns] = useState(3); 

    const toggleItemSelect = (item) => {
        if (selectedLanguage.find(selectedItem => selectedItem.id === item.id)) {
            setSelectedLanguage(prevItems => prevItems.filter(selectedItem => selectedItem.id !== item.id));
        } else {
            setSelectedLanguage(prevItems => [...prevItems, item]);
        }
    };

    const handleSelectAll = () => {
      if (selectAll) {
          setSelectedLanguage([]);
      } else {
          setSelectedLanguage(categories);
      }
      setSelectAll(prevState => !prevState);
  };

      console.log("The Data is => ", selectedLanguage);
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
                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(24), marginBottom: windowWidth * 0.02}}>Sélectionnez vos centres d’intérêts</Text>
                        <View style={{width: windowWidth * 0.7, alignSelf: "center"}}>
                          <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(15), lineHeight: windowWidth * 0.05}}>Afin de mieux cibler les bons plans qui vous seront proposés</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, marginTop: windowWidth * 0.12}}>
                      <View style={{justifyContent: "flex-end",alignItems: "flex-end",marginBottom: windowWidth * 0.05}}>
                        <TouchableOpacity onPress={handleSelectAll} style={{paddingHorizontal: 15,paddingVertical: 5, borderRadius: 50,backgroundColor: COLORS.borderColor}}>
                          <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(8)}}>Selectionner Tous</Text>
                        </TouchableOpacity>
                      </View> 
                        <FlatList
                            data={categories}
                            numColumns={numColumns}
                            columnWrapperStyle={{justifyContent: "space-between"}}
                            key={`flatlist-${numColumns}`}
                            style={{width: "100%"}}
                            renderItem={({ item }) => <ChoiseCard item={item} onPress={() => toggleItemSelect(item)} selectedLanguage={selectedLanguage}/>}
                            keyExtractor={item => item.id}
                            extraData={selectedLanguage} // Important! This ensures FlatList re-renders when state changes
                            />
                    </View>
                    <View style={{flex: 1, justifyContent: "flex-end", marginBottom: windowHeight * 0.05}}>
                       <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(11), textAlign: "center", color: COLORS.secondary}}>Vous pourrez modifier vos choix à tout moment dans les réglages</Text>
                       <View style={{flexDirection:"row",gap: 15 ,justifyContent: "center", alignItems: "center", marginTop: windowWidth * 0.05, }}>
                        <ButtonOutline title={"Passer"} onPress={() => navigation.navigate('Choix2')}/>
                        <Button title={"Continuer"} onPress={() => navigation.navigate('Choix2')}/>
                       </View>
                    </View>
                </View>
            </ScrollView>
           </SafeAreaView>
           


    </View>
  )
}

export default ChoixInter1