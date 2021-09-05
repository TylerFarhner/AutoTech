import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import ModalComp from '../components/Modal'
import OilPressureLight from '../components/Indicator Lights/OilPressureLight'
import CELLight from "../components/Indicator Lights/CELLight";
import CELFlashLight from "../components/Indicator Lights/CELFlashLight";
import RapidTurnSignalLight from "../components/Indicator Lights/RapidTurnSignalLight";
import LightBulbLight from "../components/Indicator Lights/LightBulbLight";

const HomeScreen = () => {

    return(
        <View style={styles.layout}>
            <OilPressureLight />
            <CELLight />
            <CELFlashLight />
            <RapidTurnSignalLight />
            <LightBulbLight />
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