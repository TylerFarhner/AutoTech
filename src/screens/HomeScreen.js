import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import ModalComp from '../components/Modal'
import OilPressureLight from '../components/Indicator Lights/OilPressureLight'
import CELLight from "../components/Indicator Lights/CELLight";
import CELFlashLight from "../components/Indicator Lights/CELFlashLight";
import RapidTurnSignalLight from "../components/Indicator Lights/RapidTurnSignalLight";
import LightBulbLight from "../components/Indicator Lights/LightBulbLight";
import TempGaugeLight from "../components/Indicator Lights/TempGaugeLight";
import TireBlinkingLight from "../components/Indicator Lights/TireBlinkingLight";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.row}>
                    <OilPressureLight />
                    <CELLight />
                </View>
                <View style={styles.row}>
                    <CELFlashLight />
                    <RapidTurnSignalLight />
                </View>
                <View style={styles.row}>
                    <LightBulbLight />
                    <TempGaugeLight />
                </View>
                <View style={styles.row}>
                    <TireBlinkingLight />
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row'
    }
})

export default HomeScreen;