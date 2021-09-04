import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

// ------------- CARD IMPORTS -------------------------
import EngineCard from "../components/Diagnostic Cards/EngineCard";
import BrakeCard from "../components/Diagnostic Cards/BrakeCard";

const GMScreen = () => {

    return(
        <ScrollView>
            <EngineCard />
            <BrakeCard />
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    
})

export default GMScreen;