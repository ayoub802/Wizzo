import { View, Text, Touchable, TouchableOpacity, Animated, Easing, PixelRatio } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global'
import TrieModal from './TrieModal'
import AntDesign from "react-native-vector-icons/AntDesign"
const TrieButton = ({ top }) => {
    const scale = useRef(new Animated.Value(0)).current;

    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
    const [isVisible, setIsVisible] = useState(false)
    function resizeBox(to){
        to === 1 && setIsVisible(true);
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start(() => to === 0 && setIsVisible(false));
      }
  return (
    <View style={{position: "relative"}}>
      <TouchableOpacity  onPress={() =>  {resizeBox(1)}} style={{borderRadius: 50,justifyContent: "center",flexDirection: "row" ,alignItems: "center" ,borderWidth: 1, borderColor: "#CDCDCD",width: 95,gap: 5 ,height: 28,position: "relative", zIndex: 1}}>
          <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: "#CDCDCD", fontSize: getFontSize(13)}}>Trier par</Text>
        <AntDesign name='caretdown' size={12} color={"#CDCDCD"}/>
      </TouchableOpacity>
      <TrieModal isVisible={isVisible} setIsVisible={setIsVisible} resizeBox={resizeBox} top={top}/>
    </View>
  )
}

export default TrieButton