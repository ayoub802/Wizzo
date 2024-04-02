import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleHeader from '../../components/Header/TitleHeader'
import Search from '../../components/Search/Search'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Annuaire = () => {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
        <ScrollView style={{flex:1}}>
            <View style={{flex: 1, backgroundColor:"#fff"}}>
                <TitleHeader title={"Annuaire"} />
                <View style={{width: windowWidth * 0.85, alignSelf:"center"}}>
                    <View style={{marginTop: 10}}>
                      <Search plceholderTitle={"Rechercher"}/>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => setModalVisible(true)}
                      >
                        <Text>Open Menu</Text>
                      </TouchableOpacity>
                    </View>
                </View>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Option 1</Text>
                      <Text style={styles.modalText}>Option 2</Text>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Hide Menu</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 15,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default Annuaire