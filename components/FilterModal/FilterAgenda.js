import { View, Text } from 'react-native'
import React from 'react'
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';

const FilterAgenda = ({sheetRef}) => {
  return (
    <View style={{flex: 1}}>
        <BottomSheet ref={sheetRef}>
        <Text>
          The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app craves 🚀
        </Text>
    </BottomSheet>
    </View>
  )
}

export default FilterAgenda