import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import UnorderedList from 'react-native-unordered-list'

const WheelsTiresScreen = () => {

    return(
        <View style={styles.container}>

            <UnorderedList>
                <Text>Tire information written on the sidewall of the tire. It includes tire size and fitment to wheel(rim), as well as max pressure</Text>
                <Text>Puncture to tire where tire meets surface of the road is repairable. If damage to tire where it meets the wheel or any part of the sidewall warrants replacement</Text>
                <Text>Recommended tire pressure written on driver side door panel near driver seat, typical for air to be set at 35psi</Text>
                <Text>Use nitrogen not air if tire valve cap is green</Text>
                <Text>Recommended tire replacement at or below 5mm tread life</Text>
                <Text>AWD vehicles must have even tire tread life on front and/or rear tires therefore replacement of multiple tires may be necessary when replacing single tire</Text>
                <Text>Dented or damaged wheels(rims) will lead to unstable driving conditions, replace when necessary</Text>
            </UnorderedList>

            

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    }
})

export default WheelsTiresScreen;