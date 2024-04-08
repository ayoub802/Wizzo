import { View, Text, StatusBar, Dimensions, PixelRatio, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Button  } from 'react-native-paper';
import { Platform } from 'react-native';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Message from "../../assets/icons/message.png"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import HeaderProfile from '../../components/Header/HeaderProfile';
import { ProfileUser } from '../../constant/image';
import { coups, infoUpdate, intert } from '../../constant/data';
import CoupsCard from '../../components/Cards/CoupsCard';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
import { Switch } from '@rneui/themed';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UpdateProfileScreen = () => {

    const bell = <Fontisto name="bell" size={20} color="#000"/>
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    useEffect(() => {
       StatusBar.setBackgroundColor("#fff")
       StatusBar.setBarStyle("dark-content")
    }, [])

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn1, setIsSwitchOn1] = useState(false);


    const RenderInfo = ({item}) => {
        return(
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: windowWidth * 0.05}}>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(18), textDecorationLine: item.textDecoration}}>{item.title}</Text>

            <Button icon={({ color, size }) => (
                <Feather name={"edit-3"} color={COLORS.primary} size={size} />
                )}  mode="contained" style={{backgroundColor:  COLORS.primary_light1,paddingVertical: 0, paddingHorizontal: 8}} contentStyle={{height: 35}} textColor={COLORS.primary} labelStyle={{fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", fontSize: getFontSize(12),  height: 22}} onPress={() => console.log('Pressed')}>
              Modifier
            </Button>
          </View>
        )
    } 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
        <View style={{flex: 1,backgroundColor: "#fff"}}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <HeaderProfile title={"Modifier le profil"} isDisplay={false}/>

            <View style={{flex: 1, width: windowWidth * 0.9, alignSelf: "center", marginTop: windowWidth * 0.01}}>
                <View style={{flex: 1}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Avatar.Image size={100} source={ProfileUser} />
                    <View style={{marginTop: windowWidth * 0.02}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(15)}}>Modifier la photo ou l’avatar</Text>
                    </View>
                    </View>
                    <View style={{marginTop: windowWidth * 0.05}}>
                        <FlatList 
                            data={infoUpdate}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <RenderInfo item={item}/>}
                        />
                    </View>

                    <View style={{marginTop: windowWidth * 0.05, flexDirection: "column", gap: 10, width: windowWidth * 0.3}}>
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(13), color: COLORS.secondary}}>Par email</Text>  
                        <Switch
                            value={isSwitchOn}
                            onValueChange={(value) => setIsSwitchOn(value)}
                            thumbColor={COLORS.white}
                            color={COLORS.primary}
                            
                            />
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(13), color: COLORS.secondary}}>Push</Text>  
                        <Switch
                            value={isSwitchOn1}
                            onValueChange={(value) => setIsSwitchOn1(value)}
                            thumbColor={COLORS.white}
                            color={COLORS.primary}
                            
                            />
                        </View>
                    </View>

                    <View style={{marginTop: windowWidth * 0.1}}>
                        <TouchableOpacity style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#EB5757", fontSize: getFontSize(18)}}>Se déconnecter</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
          </ScrollView>
                <View style={{justifyContent: "flex-end",marginBottom: windowWidth * 0.09, width: windowWidth * 0.6, alignSelf: "center"}}>
                    <TouchableOpacity style={{paddingHorizontal: windowWidth * 0.07,backgroundColor: "#EB5757",height: windowHeight * 0.075 ,paddingVertical: windowWidth * 0.032, borderRadius: 8, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(15), color: COLORS.white, textTransform: "uppercase"}}>Supprimer le compte</Text>
                    </TouchableOpacity>
                </View>
        </View>
    </SafeAreaView>
  )
}

export default UpdateProfileScreen