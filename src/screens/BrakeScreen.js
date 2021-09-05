import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import UnorderedList from 'react-native-unordered-list'

const BrakeScreen = () => {

    return(
        <ScrollView>
            <View style={styles.container}>

<UnorderedList>
    <Text style={styles.text}>Brake pad/rotor/caliper maintenance depends on brake usage</Text>
    <UnorderedList>
        <Text style={styles.text}>Symptoms of failing brake components include loud screeching, shaking of steering wheel when brakes are applied,
                usually accompanied with a warning light on dash, loss of breaking force, a soft or spongy brake pedal feel</Text>
    </UnorderedList>
</UnorderedList>

<UnorderedList>
    <Text style={styles.text}>Brake fluid replacement recommended every 4 to 5 years, but have a mechanic inspect your brake fluid periodically</Text>
    <UnorderedList>
        <Text style={styles.text}>The required type of brake fluid is usually written on the cap of the brake fluid reservoir in the engine bay(DOT3, DOT4, DOT5)</Text>
    </UnorderedList>
</UnorderedList>

<UnorderedList>
    <Text style={styles.text}>ABS system would require a technician to scan the vehicle for fault codes</Text>
</UnorderedList>

</View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    text: {
        fontSize: 20
    }
})

export default BrakeScreen;