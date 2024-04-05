import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity, PixelRatio } from 'react-native'
import React from 'react'
import BottomSheet from '@devvie/bottom-sheet'
import TitleHeader from '../Header/TitleHeader'
import { FlashList } from '@shopify/flash-list';
import { ShareIcon } from '../../constant/data';
import { COLORS, FONTFAMILY } from '../../styles/Global';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ShareModal = ({sheetRef}) => {

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    const RenderShare = ({item}) => {
        return(
           <TouchableOpacity style={{marginLeft: windowWidth * 0.05, marginBottom: windowWidth * 0.06,justifyContent: "center", alignItems: "center"}}>
            <Image source={item.icon} style={{width: item.id == 1 ? windowWidth * 0.12 : windowWidth * 0.15, height: item.id == 1 ? windowWidth * 0.12 : windowWidth * 0.15, marginBottom: item.id == 1 ? 10 : 0}}/>
             <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary,fontSize: getFontSize(13), textAlign: "center"}}>{item.title}</Text>
           </TouchableOpacity>
        )
    }
  return (
    <BottomSheet style={{backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20}} height={windowHeight * .48} backdropMaskColor={"#00000090"}  ref={sheetRef}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <TitleHeader title={"Partager avec vos proches"} styleTop={-windowWidth * 0.12}/>
             <View style={{width: windowWidth * 0.92, alignSelf: "center"}}>
                <FlashList 
                  data={ShareIcon}
                  estimatedItemSize={200}
                  itemSpacing={100} 
                  numColumns={4}
                  renderItem={({item}) => <RenderShare item={item}/>}
                />
                    <TouchableOpacity onPress={() => sheetRef.current.close()} style={{height: windowHeight * 0.08,justifyContent: "center",paddingHorizontal: windowWidth * 0.05 ,flexDirection: "row" ,alignItems: "center" ,width: windowWidth * 0.7, alignSelf: "center" ,backgroundColor: "#EEEEEF", borderRadius: windowWidth * 0.035}}>
                        <Text style={{color: "#484646", fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", fontSize: getFontSize(16)}}>Annuler</Text>
                    </TouchableOpacity>
                {/* {
                    ShareIcon.map((obj, i) => <RenderShare key={i} item={obj}/>)
                } */}
             </View>
        </ScrollView>
    </BottomSheet>
  )
}

export default ShareModal