import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';

export default function TractionControlLight() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Traction control indicator - to inform you that the traction control function has been engaged</Text>

            <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: 'black' }}
                onPress={() => {
                setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
            </View>
        </View>
        </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image source={require('../../../assets/images/IndicatorLights/TractionControlLight.png')} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: "#fcb073"
  },
});