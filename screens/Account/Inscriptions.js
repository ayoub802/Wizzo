import { View, Text, StatusBar, Image, ScrollView, Dimensions, PixelRatio, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FacebookIcon, Shape1, Shape2, Shape3 } from '../../constant/image'
import { Appbar, Checkbox } from 'react-native-paper';
import BackHeader from '../../components/Header/BackHeader';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Message from "../../assets/icons/message.png"
import Lock from "../../assets/icons/lock.png"
import hide from "../../assets/icons/hide.png"
import user from "../../assets/icons/user.png"
import ButtonBig from '../../components/buttons/ButtonBig';
import { GoogleIcon } from '../../constant/image';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Inscriptions = ({ navigation}) => {
  const [checked, setChecked] = useState(false);
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  useEffect(() => {
   StatusBar.setBarStyle('dark-content')
  }, [])
  return (
    <View style={{flex: 1, backgroundColor: "#fff", position: "relative"}}>

       <StatusBar translucent backgroundColor="transparent" />
       <View style={{flex: 1,position: "relative" ,justifyContent: "space-between", alignItems: "center", flexDirection: "column"}}>
           
           <SafeAreaView style={{flex: 1, backgroundColor: "#fff", width: "100%", position: "relative" }}>
           <View style={{position: "absolute",zIndex: -1,bottom: 0, left: 0}}>
             <Image source={Shape1} style={{width: 166, height: 153, objectFit: "cover"}}/>
           </View>

           <View style={{position: "absolute",zIndex: -1,bottom: 10, right: 0}}>
            <Image source={Shape2} style={{width: 249,height: 620, objectFit: "cover"}}/>
          </View>

          <View style={{position: "absolute",zIndex: -1,top: - windowWidth * .05, right: 0}}>
           <Image source={Shape3} style={{width: 227, height: 209, objectFit: "cover"}}/>
          </View> 
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
              <View style={{width: windowWidth * 0.8, alignSelf:"center"}}>
                <View style={{marginTop: windowWidth * 0.05}}>
                  <BackHeader navigation={navigation}/>
                </View>
                <View style={{marginTop: windowWidth * 0.05, marginBottom: windowWidth * 0.02}}>
                   <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(24), color: COLORS.secondary}}>Inscription</Text>
                </View>
                <View>
                  <View style={{marginTop: windowWidth * 0.08, flexDirection: "column", gap: 20}}>
                              <View
                              style={{
                                  borderWidth: 1,
                                  borderColor: "#E4DFDF",
                                  borderRadius: 12,
                                  flexDirection: "row",
                                  gap: 8,
                                  alignItems: "center",
                                  paddingHorizontal: 15,
                                  paddingVertical: 5,
                                  position: "relative",
                                  zIndex: 100,
                                  backgroundColor: "#fff",
                              }}
                              >
                            <Image source={user} style={{width: 18, height: 23, backgroundColor: "#fff"}}/>
                                  <TextInput 
                                      keyboardType='email-address'
                                      placeholder='Nom complet'
                                      autoComplete='email'
                                      placeholderTextColor={COLORS.placeHolderColor}
                                      style={{fontFamily: FONTFAMILY.ABeeZee, width: "100%", fontSize: getFontSize(14), color: COLORS.secondary}}
                                  />
                              </View>
                              <View
                              style={{
                                  borderWidth: 1,
                                  borderColor: "#E4DFDF",
                                  borderRadius: 12,
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  gap: 8,
                                  alignItems: "center",
                                  paddingHorizontal: 15,
                                  paddingVertical: 5,
                                  backgroundColor: "#fff",
                                  position: "relative",
                                  zIndex: 100
                              }}
                              >
                            <Image source={Message} style={{width: 22, height: 20, backgroundColor: "#fff"}}/>
                            <TextInput 
                                      keyboardType='email-address'
                                      placeholder='abc@gmail.com'
                                      autoComplete='email'
                                      placeholderTextColor={COLORS.placeHolderColor}
                                      style={{fontFamily: FONTFAMILY.ABeeZee, width: "100%", fontSize: getFontSize(14), color: COLORS.secondary}}
                                  />

                              </View>

                              <View
                              style={{
                                  borderWidth: 1,
                                  borderColor: "#E4DFDF",
                                  borderRadius: 12,
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  gap: 8,
                                  alignItems: "center",
                                  paddingHorizontal: 15,
                                  paddingVertical: 5,
                                  backgroundColor: "#fff",
                                  position: "relative",
                                  zIndex: 100
                              }}
                              >
                            <Image source={Lock} style={{width: 20, height: 23, backgroundColor: "#fff"}}/>
                                  <TextInput 
                                      keyboardType='visible-password'
                                      placeholder='Votre mot de passe'
                                      autoComplete='password'
                                  
                                      placeholderTextColor={COLORS.placeHolderColor}
                                      style={{fontFamily: FONTFAMILY.ABeeZee,marginRight: 'auto', width: "100%",fontSize: getFontSize(14), color: COLORS.secondary}}
                                  />
                                  <TouchableOpacity style={{position: "relative", zIndex: 100}}>
                                    <Image source={hide} style={{width: 20, height: 17, backgroundColor: "#fff"}}/>
                                  </TouchableOpacity>

                              </View>
                              <View
                              style={{
                                  borderWidth: 1,
                                  borderColor: "#E4DFDF",
                                  borderRadius: 12,
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  gap: 8,
                                  alignItems: "center",
                                  paddingHorizontal: 15,
                                  paddingVertical: 5,
                                  backgroundColor: "#fff",
                                  position: "relative",
                                  zIndex: 100
                              }}
                              >
                            <Image source={Lock} style={{width: 20, height: 23, backgroundColor: "#fff"}}/>
                                  <TextInput 
                                      keyboardType='visible-password'
                                      placeholder='Confirmation mot de passe'
                                      autoComplete='password'
                                  
                                      placeholderTextColor={COLORS.placeHolderColor}
                                      style={{fontFamily: FONTFAMILY.ABeeZee,marginRight: 'auto', width: "100%",fontSize: getFontSize(14), color: COLORS.secondary}}
                                  />
                                  <TouchableOpacity style={{position: "relative", zIndex: 100}}>
                                    <Image source={hide} style={{width: 20, height: 17, backgroundColor: "#fff"}}/>
                                  </TouchableOpacity>

                              </View>

                              <View style={{flexDirection: "row",alignItems: "center",gap: 1}}>
                                  <Checkbox
                                  status={checked ? 'checked' : 'unchecked'}
                                  onPress={() => {
                                    setChecked(!checked);
                                  }}
                                  color={COLORS.primary}
                                />
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(13), color: COLORS.secondary}}>S’inscrire à la newsletter </Text>
                              </View>


                              <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(11), color: COLORS.secondary}}>En vous inscrivant vous acceptez</Text>
                                <TouchableOpacity>
                                  <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(11), color: COLORS.primary}}>les conditions d’utilisation</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width: windowWidth * 0.7, alignSelf: "center"}}>
                                <ButtonBig Press={() => navigation.navigate('Verification')} title={"S’inscrire"}/>
                              </View>

                              <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.secondary, textAlign: "center"}}>Vous avez déjà un compte ?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                  <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.primary, textAlign: "center"}}>Connectez-vous</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width: windowWidth * 0.7, alignSelf: "center",}}>
                                  <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, color: "#9D9898"}}>Inscription rapide</Text>
                              </View>
                              <View style={{width: windowWidth * 0.7, alignSelf: "center",  flexDirection: "column", gap: 15}}>
                                <TouchableOpacity style={{backgroundColor: "#fff", borderRadius: 12, justifyContent: "center", alignItems: "center", height: 60, flexDirection: "row", gap: 15}}>
                                    <Image source={GoogleIcon} style={{width: 26, height: 26, objectFit: "cover"}}/>
                                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.secondary}}>Continuer avec Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{backgroundColor: "#fff", borderRadius: 12, justifyContent: "center", alignItems: "center", height: 60, flexDirection: "row", gap: 15}}>
                                    <Image source={FacebookIcon} style={{width: 26, height: 26, objectFit: "cover"}}/>
                                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.secondary}}>Continuer avec Facebook</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection: "row", alignItems: "center", gap: 5,marginBottom: windowWidth * 0.04}}>
                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.secondary, textAlign: "center"}}>Vous avez déjà un compte ?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                  <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.primary, textAlign: "center"}}>Connectez-vous</Text>
                                </TouchableOpacity>
                              </View>

                  </View>
                </View>
              </View>
            </ScrollView>
           </SafeAreaView>
           




       </View>

    </View>
  )
}

export default Inscriptions