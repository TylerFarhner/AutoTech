import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import UnorderedList from 'react-native-unordered-list'

const TransScreen = () => {

    return(
        <ScrollView>
            <View style={styles.container}>

<UnorderedList>
    <Text style={styles.text}>Check transmission fluid periodically, typical transmission fluid color is a cherry red so inspect for discoloration and fluid condition</Text>
    <Text style={styles.text}>Avoid moving through gears while the vehicle is in motion</Text>
    <Text style={styles.text}>With normal driving conditions, a transmission flush should be performed every 30,000 to 60,000 miles</Text>
    <Text style={styles.text}>Transmission filter should be replaced every 30,000 miles after the 100k mile marker</Text>
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

export default TransScreen;