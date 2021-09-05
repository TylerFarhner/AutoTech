import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import UnorderedList from 'react-native-unordered-list'

const SuspensionScreen = () => {

    return(
        <View style={styles.container}>

            <UnorderedList>
                <Text style={styles.text}>Suspension/Steering(most are lifetime fitment/usually require replacement only when damaged or during heavy driving conditions)</Text>
                <UnorderedList>
                    <Text style={styles.text}>Strut replacement on average every 5-7 years, but depends on the condition of the vehicle and how it’s used</Text>
                </UnorderedList>
                <UnorderedList>
                    <Text style={styles.text}>Tie rod replacement when damaged or faulty</Text>
                </UnorderedList>
            </UnorderedList>

            

        </View>
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

export default SuspensionScreen;