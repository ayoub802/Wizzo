import { View, Text, Image, StatusBar, Dimensions, ScrollView, PixelRatio, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FacebookIcon, GoogleIcon, LogoWizzy, Shape1, Shape2, Shape3 } from '../../constant/image';
import Message from "../../assets/icons/message.png"
import Lock from "../../assets/icons/lock.png"
import hide from "../../assets/icons/hide.png"
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Svg, { SvgUri } from 'react-native-svg';
import ButtonBig from '../../components/buttons/ButtonBig';
import SwitchToggle from "react-native-switch-toggle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Login = ({ navigation }) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    const [on, setOn] = useState(false)

  return (
    <View style={{flex: 1, backgroundColor: "#fff", position: "relative"}}>

       <StatusBar translucent backgroundColor="transparent" />
       <View style={{flex: 1,position: "relative" ,justifyContent: "space-between", alignItems: "center", flexDirection: "column"}}>
           
           <SafeAreaView style={{flex: 1, backgroundColor: "#fff", width: "100%" }}>
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
                    <View style={{flex: 1,width: windowWidth * 0.85, alignSelf: "center", position: "relative", zIndex: 1000}}>
                        <View style={{marginTop: windowWidth * 0.1, width: "100%", alignSelf: "center", justifyContent: "center", alignItems: "center"}}>
                            <Image source={LogoWizzy} style={{width: 150, height: 150, objectFit: "cover", alignSelf: "center"}}/>
                        </View>
                        <View style={{marginTop: windowWidth * 0.08}}>
                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(24), color: COLORS.secondary}}>Se connecter</Text>
                        </View>
                        
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

                        </View>
                        <View style={{marginTop: windowWidth * 0.06, flexDirection: "row", justifyContent: "space-between"}}>
                            <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                            <SwitchToggle
                                switchOn={on}
                                onPress={() => setOn(!on)}
                                circleColorOff={COLORS.primary}
                                circleColorOn={COLORS.white}
                                backgroundColorOn={COLORS.primary}
                                backgroundColorOff={COLORS.borderColor}
                                containerStyle={{
                                    width: 50,
                                    height: 23,
                                    borderRadius: 25,
                                    padding: 4,
                                }}
                                circleStyle={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 20,
                                }}
                                />
                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.secondary}}>Rester connecté</Text>
                            </View>
                           <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.secondary}}>Mot de passe oublié ?</Text>
                        </View>

                        <View style={{width: windowWidth * 0.7, alignSelf: "center", marginTop: windowWidth * 0.1}}>
                            <ButtonBig title={"Se connecter"}/>
                        </View>
                        <View style={{width: windowWidth * 0.7, alignSelf: "center", marginTop: windowWidth * 0.08,}}>
                            <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, color: "#9D9898"}}>Ou</Text>
                        </View>


                        <View style={{width: windowWidth * 0.7, alignSelf: "center", marginTop: windowWidth * 0.05, flexDirection: "column", gap: 15}}>
                            <TouchableOpacity style={{backgroundColor: "#fff", borderRadius: 12, justifyContent: "center", alignItems: "center", height: 60, flexDirection: "row", gap: 15}}>
                                <Image source={GoogleIcon} style={{width: 26, height: 26, objectFit: "cover"}}/>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.secondary}}>Continuer avec Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: "#fff", borderRadius: 12, justifyContent: "center", alignItems: "center", height: 60, flexDirection: "row", gap: 15}}>
                                <Image source={FacebookIcon} style={{width: 26, height: 26, objectFit: "cover"}}/>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(14), color: COLORS.secondary}}>Continuer avec Facebook</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: windowWidth * 0.05, flexDirection: "row",  gap: 8}}>
                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(15)}}>Par encore de compte ?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.primary, fontSize: getFontSize(15)}}>Créer votre compte</Text>
                            </TouchableOpacity>
                        </View>
                          
                    </View>
            </ScrollView>
           </SafeAreaView>
           




       </View>

    </View>
  )
}

export default Login