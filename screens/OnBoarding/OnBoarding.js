import { View, Text, SafeAreaView, Image, Dimensions, PixelRatio, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { LogoWizzy, Shape1, Shape2, Shape3 } from '../../constant/image'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import ButtonBig from '../../components/buttons/ButtonBig';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const OnBoarding = () => {

     const navigation = useNavigation();
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    console.log("The Font Size => ", windowWidth * 0.4 , " The Pixel => ", windowHeight * 0.19);

  return (
    <View style={{flex: 1, backgroundColor: "#fff", position: "relative"}}>

       <StatusBar translucent backgroundColor="transparent" />
       <View style={{flex: 1,position: "relative" ,justifyContent: "space-between", alignItems: "center", flexDirection: "column"}}>
           <View style={{position: "absolute",zIndex: -10,bottom: 0, left: 0}}>
             <Image source={Shape1} style={{width: 166, height: 153, objectFit: "cover"}}/>
           </View>

           <View style={{position: "absolute",zIndex: -10,bottom: 10, right: 0}}>
            <Image source={Shape2} style={{width: 249,height: 620, objectFit: "cover"}}/>
          </View>

          <View style={{position: "absolute",zIndex: -10,top: - windowWidth * .05, right: 0}}>
           <Image source={Shape3} style={{width: 227, height: 209, objectFit: "cover"}}/>
          </View> 
           
           <View></View>
           
           <View style={{flex: 1, justifyContent: 'center', alignItems: "center", gap: 90}}>
            <Image source={LogoWizzy} style={{width: windowWidth * .52, height: windowHeight * .33 ,objectFit: "cover"}}/>
            <View>
                <Text style={{color: COLORS.secondary, fontFamily: FONTFAMILY.ABeeZee, textAlign: "center", fontSize: getFontSize(24)}}>Bienvenue</Text>
                <Text style={{color: COLORS.secondary, fontFamily: FONTFAMILY.ABeeZee,lineHeight: getFontSize(30) ,textAlign: "center", fontSize: getFontSize(15)}}>Sur votre guide des bons plans locaux</Text>
            </View>
           </View>


           <View style={{width: "100%", maxWidth: windowWidth * 0.8, paddingBottom: windowWidth * 0.08}}>
            <ButtonBig Press={() => navigation.navigate('Choix')} title={"Continuer"}/>
           </View>

       </View>

    </View>
  )
}

export default OnBoarding