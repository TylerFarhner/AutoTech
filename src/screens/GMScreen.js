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
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Air Conditioning')}>
                <ACCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Brakes')}>
                <BrakeCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Cooling')}>
                <CoolingCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Differential')}>
                <DiffCard />
            </TouchableOpacity>
                
            <TouchableOpacity onPress={() => props.navigation.navigate('Engine')}>
                <EngineCard />
            </TouchableOpacity>    
        
            <TouchableOpacity onPress={() => props.navigation.navigate('Suspension')}>
                <SuspensionCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Transmission')}>
                <TransCard />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Wheels & Tires')}>
                <WheelsTiresCard />
            </TouchableOpacity>
                
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 20
    }
})

export default GMScreen;