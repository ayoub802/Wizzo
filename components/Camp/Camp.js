import { View, Text, Image } from 'react-native'
import React from 'react'

const CampImage = ({imgUrl, index}) => {
  return (
    <Image
    source={imgUrl}
    resizeMode="contain"
    style={{
      width: 35,
      height: 35,
      marginLeft: index === 0 ? 0 : -14,
    }}
  />
  )
}

export default CampImage