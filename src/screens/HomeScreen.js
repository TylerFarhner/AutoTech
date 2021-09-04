import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import Header from '../components/Header'
import Card from '../components/Card'
import ModalComp from '../components/Modal'

const HomeScreen = () => {

    return(
        <View style={styles.layout}>
            <ModalComp />
            <ModalComp />
            <ModalComp />
            <ModalComp />
            {/* <Card />
            <Card /> */}
        </View>
    )

}

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        padding: 10,
    }
})

export default HomeScreen;