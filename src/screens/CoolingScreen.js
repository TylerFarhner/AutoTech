import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import UnorderedList from 'react-native-unordered-list'

const CoolingScreen = () => {

    return(
        <View style={styles.container}>

            <UnorderedList>
                <Text>Coolant flush depends on type of coolant the manufacturer requires for the vehicle and the amount of vehicle usage,
                        typically a flush should be performed every 2 years or 30,000 miles</Text>
            </UnorderedList>

            <UnorderedList>
                <Text>Periodic checks for fluid condition and fluid leaks /discoloration of coolant could indicate rust or gasket failure</Text>
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

export default CoolingScreen;