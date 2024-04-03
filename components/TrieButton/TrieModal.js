import {View, Text, Modal, TouchableOpacity, Animated, Easing} from 'react-native';
import React, { useRef } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { COLORS } from '../../styles/Global';

const TrieModal = ({isVisible, setIsVisible, resizeBox, top = 170,}) => {
    const scale = useRef(new Animated.Value(0)).current;

  const options = [
    {
      id: 1,
      title: 'Ascendent',
    },
    {
      id: 2,
      title: 'Descendent',
    },
  ];

  console.log("The Visibility => ", isVisible);
  return (
    <Modal transparent visible={isVisible}>
      <SafeAreaView
        style={{flex: 1}}
        onTouchStart={() => resizeBox(0)}
        >
        <Animated.View
          style={[{
            borderRadius: 8,
            borderColor: COLORS.borderColor,
            borderWidth: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            position: 'absolute',
            top: top,
            right: 30,
            width: 120,
          },
        //    {
        //     transform: [{
        //         scale
        //     }]
        //    },
        //    {
        //     opacity: scale.interpolate({inputRange:[0,1], outputRange:[0, 1]})
        //    }
          ]}>
          {options.map((obj, index) => (
            <TouchableOpacity key={index} style={{paddingVertical: 7, borderBottomColor: "#ccc", borderBottomWidth: index === options.length - 1 ? 0 : 1}}>
              <Text>{obj.title}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};

export default TrieModal;
