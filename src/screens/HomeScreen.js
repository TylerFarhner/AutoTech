import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

// ---------------------- INDICATOR LIGHT MODAL IMPORTS ---------------------------
// import CELFlashLight from "../components/Indicator Lights/CELFlashLight";
// import CabinAirLight from '../components/Indicator Lights/CabinAirLight';
// no longer needed
import OilPressureLight from '../components/Indicator Lights/OilPressureLight'
import CELLight from "../components/Indicator Lights/CELLight";
import RapidTurnSignalLight from "../components/Indicator Lights/RapidTurnSignalLight";
import LightBulbLight from "../components/Indicator Lights/LightBulbLight";
import TempGaugeLight from "../components/Indicator Lights/TempGaugeLight";
import TireBlinkingLight from "../components/Indicator Lights/TireBlinkingLight";
import AirbagSRSLight from "../components/Indicator Lights/AirbagSRSLight";
import TractionControlLight from "../components/Indicator Lights/TractionControlLight";
import TrunkLight from "../components/Indicator Lights/TrunkLight";
import WindshieldLight from "../components/Indicator Lights/WindshieldLight";
import FogLampLight from "../components/Indicator Lights/FogLampLight";
import BatteryLight from "../components/Indicator Lights/BatteryLight";
import TransmissionLight from '../components/Indicator Lights/TransmissionLight';
import DrivetrainLight from '../components/Indicator Lights/DrivetrainLight';
import BrakeLight from '../components/Indicator Lights/BrakeLight';
import GasCapLight from '../components/Indicator Lights/GasCapLight';
import PressBrakeLight from '../components/Indicator Lights/PressBrakeLight';
import PressClutchLight from '../components/Indicator Lights/PressClutchLight';
import SteeringWheelLight from '../components/Indicator Lights/SteeringWheelLight';
import ParkingBrakeLight from '../components/Indicator Lights/ParkingBrakeLight';
import TriangleExclamationLight from '../components/Indicator Lights/TriangleExclamationLight';
import CatalyticConverterLight from '../components/Indicator Lights/CatalyticConverterLight';
import CircleDashesLight from '../components/Indicator Lights/CircleDashesLight';
import LaneAssistLight from '../components/Indicator Lights/LaneAssistLight';
import ABSLight from '../components/Indicator Lights/ABSLight';
import ParkAssistLight from '../components/Indicator Lights/ParkAssistLight';
import DoorAjarLight from "../components/Indicator Lights/DoorAjarLight";
// ---------------------- INDICATOR LIGHT MODAL IMPORTS ---------------------------

const HomeScreen = () => {

    return(
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.row}>
                    <OilPressureLight />
                    <CELLight />
                </View>

                <View style={styles.row}>
                    <DoorAjarLight />
                    <RapidTurnSignalLight />
                </View>

                <View style={styles.row}>
                    <LightBulbLight />
                    <TempGaugeLight />
                </View>

                <View style={styles.row}>
                    <TireBlinkingLight />
                    <AirbagSRSLight />
                </View>

                <View style={styles.row}>
                    <TractionControlLight />
                    <TrunkLight />
                </View>

                <View style={styles.row}>
                    <WindshieldLight />
                    <FogLampLight />
                </View>

                <View style={styles.row}>
                    <BatteryLight />
                    <TransmissionLight />
                </View>

                <View style={styles.row}>
                    <DrivetrainLight />
                    <BrakeLight />
                </View>

                <View style={styles.row}>
                    <GasCapLight />
                    <PressBrakeLight />
                </View>

                <View style={styles.row}>
                    <PressClutchLight />
                    <SteeringWheelLight />
                </View>

                <View style={styles.row}>
                    <ParkingBrakeLight />
                    <TriangleExclamationLight />
                </View>

                <View style={styles.row}>
                    <CatalyticConverterLight />
                    <CircleDashesLight />
                </View>

                <View style={styles.row}>
                    <LaneAssistLight />
                    <ParkAssistLight />
                </View>

                <View style={styles.row}>
                    <ABSLight />
                </View>

            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7d8597'
    },
    row: {
        flexDirection: 'row'
    }
})

export default HomeScreen;