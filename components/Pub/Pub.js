import { View, Text, Dimensions, PixelRatio, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY } from '../../styles/Global';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Banner from "../../assets/Images/Banner.png"
const Pub = () => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScale;
  return (
        <ImageBackground
            source={Banner}
            style={{ width: '100%', height: windowHeight * 0.11, marginTop: windowWidth * 0.05, borderRadius: 10, justifyContent: "center", alignItems: "center" }}
            resizeMode="cover"
        >     
          <Text style={{fontFamily: FONTFAMILY.ABeeZee, color: COLORS.secondary, fontSize: getFontSize(20)}}>Publicité 325x82</Text>
        </ImageBackground>
  )
}

export default Pub