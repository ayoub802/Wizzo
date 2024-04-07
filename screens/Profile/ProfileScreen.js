import { View, Text, StatusBar, Dimensions, PixelRatio, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Button  } from 'react-native-paper';
import { Platform } from 'react-native';
import { COLORS, FONTFAMILY } from '../../styles/Global';
import Message from "../../assets/icons/message.png"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import HeaderProfile from '../../components/Header/HeaderProfile';
import { ProfileUser } from '../../constant/image';
import { coups, intert } from '../../constant/data';
import CoupsCard from '../../components/Cards/CoupsCard';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = ({navigation}) => {

    const bell = <Fontisto name="bell" size={20} color="#000"/>
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    useEffect(() => {
       StatusBar.setBackgroundColor("#fff")
       StatusBar.setBarStyle("dark-content")
    }, [])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
        <View style={{flex: 1,backgroundColor: "#fff"}}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <HeaderProfile title={"Profil"}/>

            <View style={{flex: 1, width: windowWidth * 0.9, alignSelf: "center", marginTop: windowWidth * 0.01}}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                  <Avatar.Image size={100} source={ProfileUser} />
                  <View style={{marginTop: windowWidth * 0.02}}>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(20)}}>Mathieu Seguin</Text>
                  </View>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: windowWidth * 0.07}}>
                  <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(18)}}>Mes centres d’interêts</Text>

                  <Button icon={({ color, size }) => (
                      <Feather name={"edit-3"} color={COLORS.primary} size={size} />
                      )}  mode="contained" style={{backgroundColor:  COLORS.primary_light1,paddingVertical: 0, paddingHorizontal: 8}} textColor={COLORS.primary} labelStyle={{fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", fontSize: getFontSize(12)}} onPress={() =>  navigation.navigate('UpdateProfileScreen')}>
                    Modified
                  </Button>
                </View>

                <View style={{marginTop: windowWidth * 0.08}}>
                  <View style={{flexDirection: "row", alignItems: "center", gap: windowWidth * 0.035, maxWidth: windowWidth * 1, flexWrap: "wrap"}}>
                      {
                        intert.map((item, index) => (
                          <View key={index} style={{ paddingHorizontal: 15, paddingVertical: 8, backgroundColor: item.color, borderRadius: 50}}>
                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(14)}}>{item.title}</Text>
                          </View>
                        ))
                      }
                  </View>
                </View>

                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: windowWidth * 0.055}}>
                  <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(18)}}>Ma position</Text>

                  <Button icon={({ color, size }) => (
                      <Feather name={"edit-3"} color={COLORS.primary} size={size} />
                      )}  mode="contained" style={{backgroundColor:  COLORS.primary_light1,paddingVertical: 0, paddingHorizontal: 8}} textColor={COLORS.primary} labelStyle={{fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", fontSize: getFontSize(12)}} onPress={() => navigation.navigate('UpdateProfileScreen')}>
                    Modified
                  </Button>
                </View>
                <View style={{marginTop: windowWidth * 0.05}}>
                        <TouchableOpacity style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 15, paddingVertical: windowWidth * 0.018, paddingHorizontal: windowWidth * 0.018}}>
                            <View style={{backgroundColor: COLORS.primary_light, padding: 8, borderRadius: 15}}>
                                <View style={{backgroundColor: COLORS.white, padding: 8, borderRadius: 12}}>
                                   <Feather name="map-pin" size={20} color={COLORS.primary}/>
                                </View>
                            </View>
                            <View style={{marginRight: "auto", marginLeft: windowWidth * 0.04}}>
                                <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(16), color: COLORS.secondary}}>
                                Chateau Thierry , FRANCE
                                </Text>
                            </View>
                        </TouchableOpacity>
                     </View>
                <View style={{marginTop: windowWidth * 0.05}}>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(18), color: "#172B4D"}}>
                       Mes coups de coeurs
                    </Text>
                    <View style={{marginTop: windowWidth * 0.05}}>
                      <FlatList 
                        data={coups}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <CoupsCard item={item}/>}
                      />
                    </View>
                </View>

            </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default ProfileScreen