import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import EngineCard from "../components/EngineCard";
import BrakeCard from "../components/BrakeCard";

const GMScreen = () => {

    return(
        <View>
            <EngineCard />
            <BrakeCard />
        </View>
    )

}

const styles = StyleSheet.create({
    
})

export default GMScreen;