import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// ------------- CARD IMPORTS -------------------------
import EngineCard from "../components/Diagnostic Cards/EngineCard";
import BrakeCard from "../components/Diagnostic Cards/BrakeCard";
import CoolingCard from "../components/Diagnostic Cards/CoolingCard"
import WheelsTiresCard from "../components/Diagnostic Cards/WheelsTiresCard"
import SuspensionCard from "../components/Diagnostic Cards/SuspensionCard"
import ACCard from "../components/Diagnostic Cards/ACCard"
import TransCard from "../components/Diagnostic Cards/TransCard"
import DiffCard from "../components/Diagnostic Cards/DiffCard"

const GMScreen = props => {

    return(
        <ScrollView>
            <EngineCard />
            <TouchableOpacity onPress={() => props.navigation.navigate('BrakeScreen')}>
            <BrakeCard />
            </TouchableOpacity>
            <CoolingCard />
            <WheelsTiresCard />
            <SuspensionCard />
            <ACCard />
            <TransCard />
            <DiffCard />
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    
})

export default GMScreen;