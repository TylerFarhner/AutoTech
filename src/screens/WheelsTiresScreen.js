import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import UnorderedList from 'react-native-unordered-list'

const WheelsTiresScreen = () => {

    return(
        <ScrollView>
            <View style={styles.container}>

<UnorderedList>
    <Text style={styles.text}>Tire information written on the sidewall of the tire. It includes tire size and fitment to wheel(rim), as well as max pressure</Text>
    <Text style={styles.text}>Puncture to tire where tire meets surface of the road is repairable. If damage to tire where it meets the wheel or any part of the sidewall warrants replacement</Text>
    <Text style={styles.text}>Recommended tire pressure written on driver side door panel near driver seat, typical for air to be set at 35psi</Text>
    <Text style={styles.text}>Use nitrogen not air if tire valve cap is green</Text>
    <Text style={styles.text}>Recommended tire replacement at or below 5mm tread life</Text>
    <Text style={styles.text}>AWD vehicles must have even tire tread life on front and/or rear tires therefore replacement of multiple tires may be necessary when replacing single tire</Text>
    <Text style={styles.text}>Dented or damaged wheels(rims) will lead to unstable driving conditions, replace when necessary</Text>
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

export default WheelsTiresScreen;