import { View, Text, StatusBar, ScrollView, Dimensions, Image, PixelRatio, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { useIsFocused } from "@react-navigation/core";
import { COLORS, FONTFAMILY } from '../../styles/Global';
import HomeCardImage from '../../assets/Images/HomeCard.png'
import HomeCard1 from '../../assets/Images/HomeCard1.png'
import HomeCard2 from '../../assets/Images/HomeCard2.png'
import HomeCard3 from '../../assets/Images/HomeCard3.png'
import { AnimalIcon, EcoIcon, LogoWhite, Notification1, Notification2, Notification3, RestaurantIcon, ViandIcon, searchWhite } from '../../constant/image';
import AntDesign from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto"
import Ionicons from "react-native-vector-icons/Ionicons"
import { PlanHomeData } from '../../constant/data';
import Pub from '../../components/Pub/Pub';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({ navigation }) => {
    const sheetRef = useRef(null);

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    const FocusedStatusBar = (props) => {
        const isFocused = useIsFocused();
      
        return isFocused ? <StatusBar animated={true} {...props} /> : null;
      };

      const plansCategorie = [
        {
          id: 1,
          title: 'Animaux',
          icon: AnimalIcon,
          bgColor: COLORS.redColor,
          width: 22,
          height: 22,
        },
        {
          id: 2,
          title: 'Economie',
          icon: EcoIcon,
          bgColor: COLORS.orangeColor,
          width: 16,
          height: 26,
        },
        {
          id: 3,
          title: 'Resto',
          icon: RestaurantIcon,
          bgColor: COLORS.greenlightColor,
          width: 22,
          height: 22,
        },
        {
          id: 4,
          title: 'Viande',
          icon: ViandIcon,
          bgColor: COLORS.skyColor,
          width: 22,
          height: 22,
        },
      ];
    const Header = () => {
        return(
        <View style={{height: windowHeight * 0.29,flex: 1 ,backgroundColor: "#4A43EC",position: "relative" ,borderBottomEndRadius: windowHeight * 0.05, borderBottomStartRadius: windowHeight * 0.05}}>
            <View style={{marginTop: StatusBar.currentHeight + 10,flexDirection: "row" ,justifyContent: "space-between", alignItems: "center", width: windowWidth * 0.9, alignSelf: "center"}}>
               <View style={{width: windowWidth * 0.05}}></View>
               <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                    <Image source={LogoWhite}/>
                    <View>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee ,color: COLORS.white,fontSize: getFontSize(19) ,textTransform: "uppercase"}}>wizzeo</Text>
                        <TouchableOpacity style={{borderRadius: 50,justifyContent: "center",flexDirection: "row" ,alignItems: "center" ,width: 95,gap: 10 ,height: 28,position: "relative", zIndex: 1}}>
                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#fff", fontSize: getFontSize(13)}}>Localisation</Text>
                            <AntDesign name='caretdown' size={12} color={"#fff"}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee,textAlign: "center" ,color: COLORS.white,fontSize: getFontSize(13) ,textTransform: "uppercase"}}>Château Thierry</Text>
                    </View>
                </View>
                <TouchableOpacity style={{width: windowWidth * 0.1, height: windowWidth * 0.1,justifyContent: "center", alignItems: "center", borderRadius: 100 ,backgroundColor: "#ffffff10"}}>
                     <Fontisto name='bell' color={COLORS.white} size={20}/>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: windowWidth * 0.04,width: windowWidth * 0.8, alignSelf: "center"}}>
               <HomeSearch />
            </View>

            <View style={{position: "absolute",bottom: -windowWidth * 0.05,zIndex: 100, flex: 1 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        plansCategorie.map((obj, i) => (
                            <TouchableOpacity
                        key={i}
                        style={{
                            width: windowWidth * 0.3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 8,
                            paddingVertical: 8,
                            backgroundColor: obj.bgColor,
                            borderRadius: 50,
                            marginLeft: 10,
                        }}>
                        <Image
                            source={obj.icon}
                            style={{width: obj.width, height: obj.height}}
                        />
                        <Text
                            style={{
                            textAlign: 'center',
                            fontSize: getFontSize(12),
                            fontFamily: FONTFAMILY.ABeeZee,
                            color: COLORS.white,
                            }}>
                            {obj.title}
                        </Text>
                        </TouchableOpacity>
                        ))
                    }

                </ScrollView>
            </View>
        </View>
        )
    }

    const HomeButtonFilter = () => {
        return(
            <TouchableOpacity onPress={() =>  sheetRef.current?.open()} style={{flexDirection: "row", alignItems: "center", gap: 8, borderRadius: 50, backgroundColor: "#ffffff10", paddingVertical: 8, paddingLeft: 8, paddingRight: 15,}}>
            <View style={{width: windowWidth * 0.06, height: windowWidth * 0.06, borderRadius: 50,backgroundColor: "#A29EF0", justifyContent: "center", alignItems:"center"}}>
              <Ionicons name='filter' color={COLORS.primary} size={15}/>
            </View>
            <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(13)}}>Filters</Text>
          </TouchableOpacity>
        )
    }

    const HomeSearch = () => {
        return(
            <View style={{flexDirection: "row",gap: 5 , alignItems: "center" ,width: "100%"}}>
                <View style={{flexDirection: "row", alignItems: "center", gap: 12}}>
                    <Image source={searchWhite}/>
                    <View style={{width: 1.15, backgroundColor: COLORS.primary, height: 30}}></View>
                </View>
                <View style={{flex: 1}}>
                        <TextInput 
                        placeholder={"Rechercher"}
                        placeholderTextColor={"#ffffff50"}
                        style={{width: "100%", fontFamily: FONTFAMILY.ABeeZee, color: COLORS.white, fontSize: getFontSize(20), textDecorationLine: "none"}}
                        />
                    </View>
                <View>
                    <HomeButtonFilter sheetRef={sheetRef}/>
                </View>
            </View>
        )
    }

    const HomeCard = ({item}) => {
        return(
            <TouchableOpacity style={{padding: windowWidth * 0.04,position: "relative"}}>
                <View         
                style={{
                width: "100%",
                height: windowHeight * 0.2,
                }}>
                    <Image source={item.image} style={{width: "100%",borderRadius: 10 ,height: "100%",}} resizeMode='cover'/>
                    <View style={{position: "absolute",top: windowWidth * 0.025,width: "100%"}}>
                            <View style={{alignItems: "center",flexDirection: "row", justifyContent: "space-between", width: "100%", maxWidth: windowWidth * 0.5 , alignSelf: "center"}}>
                                 <View style={{paddingHorizontal: windowWidth * 0.021, paddingVertical: windowWidth * 0.035, borderRadius: 14, backgroundColor: "#ffffff80", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 8}}>
                                     <View style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", alignItems: "center", fontSize: getFontSize(6), color: "#EB5757"}}>du</Text>
                                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", alignItems: "center", fontSize: getFontSize(17), color: "#EB5757"}}>18</Text>
                                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", alignItems: "center", fontSize: getFontSize(8), color: "#EB5757"}}>OCT 23</Text>
                                     </View>
                                     <View style={{width: 1.2, height: windowHeight * 0.04, backgroundColor: "#EB5757"}}></View>
                                     <View style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", alignItems: "center", fontSize: getFontSize(6), color: "#EB5757"}}>au</Text>
                                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", alignItems: "center", fontSize: getFontSize(17), color: "#EB5757"}}>2</Text>
                                        <Text style={{textAlign: "center", fontFamily: FONTFAMILY.ABeeZee, textTransform: "uppercase", alignItems: "center", fontSize: getFontSize(8), color: "#EB5757"}}>OCT 24</Text>
                                     </View>
                                 </View>
                                <TouchableOpacity style={{width: windowWidth * 0.1, height: windowWidth * 0.1, borderRadius: 8, backgroundColor: "#ffffff80", alignItems: "center", justifyContent: "center"}}> 
                                    <Ionicons name='heart-outline' color={"#EB5757"} size={20}/>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>

                <View style={{marginTop: windowWidth * 0.02, paddingHorizontal: windowWidth * 0.02,}}>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(18)}}>{item.title}</Text>
                    <View style={{width: windowWidth * 0.5, marginTop: windowWidth * 0.01}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#484D70", fontSize: getFontSize(12)}}>
                        {item.desc}
                        </Text>
                        <TouchableOpacity style={{marginTop: windowWidth * 0.04}}>
                            <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(13), color: "#5669FF70"}}>En decouvrir plus &gt;&gt;</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: "#fff" }}>
        <FocusedStatusBar
        barStyle="light"
        backgroundColor="transparent"
        translucent={true}
        />
        <View style={{flex: 1, height: "100%"}}>
           <Header />
           <View style={{flex: 1, marginTop: windowWidth * 0.13}}>
                <View style={{width: windowWidth * 0.85, alignSelf: "center", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(36)}}>Bon Plans</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('BonPlan')} style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#747688", fontSize: getFontSize(12)}}>Voir tout</Text>
                        <AntDesign name='caretright' size={12} color={"#747688"}/>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: windowWidth * 0.01}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            PlanHomeData.map((obj, index) =>  <HomeCard item={obj} key={index}/>)
                        }
                    </ScrollView>
                </View>
                <View style={{marginTop: windowWidth * 0.02, width: windowWidth * 0.9, alignSelf: "center"}}>
                    <Pub />
                </View>

                <View style={{width: windowWidth * 0.85, marginTop: windowWidth * 0.05,alignSelf: "center", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(20)}}>Evènements à proximité</Text>
                    <TouchableOpacity style={{flexDirection: "row", alignItems: "center", gap: 8}}>
                        <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#747688", fontSize: getFontSize(12)}}>Voir tout</Text>
                        <AntDesign name='caretright' size={12} color={"#747688"}/>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: windowWidth * 0.01}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            PlanHomeData.map((obj, index) =>  <HomeCard item={obj} key={index}/>)
                        }
                    </ScrollView>
                </View>
           </View>
        </View>

    </ScrollView>
  )
}

export default HomeScreen