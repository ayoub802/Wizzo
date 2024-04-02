import { View, Text, ScrollView, Image, PixelRatio, FlatList, Dimensions, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import HeaderNotification from '../../components/Header/HeaderNotification'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NotificationNone } from '../../constant/image'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import { NotificationData } from '../../constant/data'
import NotifcationCard from '../../components/Cards/NotifcationCard'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Notification = () => {

  useEffect(() => {
   StatusBar.setBackgroundColor("#fff")
   StatusBar.setBarStyle('dark-content')
  }, [])
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;

    console.log("The Notification length => ", NotificationData.length);

    if(NotificationData.length == 0){
        return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
                  <HeaderNotification title={"Notifications"}/>
              <View style={{flex: 1}}>

                  <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={NotificationNone}/>
                    <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(18), color: COLORS.secondary}}>
                       Pas de notifications
                    </Text>

                    <View style={{marginTop: 20, width: "90%"}}>
                      <Text style={{fontFamily: FONTFAMILY.ABeeZee, fontSize: getFontSize(16), color: "#344B67", textAlign: "center", lineHeight: 28}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</Text>
                    </View>
                  </View>
              </View>
  </SafeAreaView>
        )
    }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <HeaderNotification title={"Notifications"} colorIcon={COLORS.redColor}/>
                <View style={{flex: 1, width: windowWidth * 0.9, alignSelf: "center", marginTop: windowWidth * 0.05}}>
                  <FlatList 
                    data={NotificationData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <NotifcationCard item={item} />}
                  />
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default Notification