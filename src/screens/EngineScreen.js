import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import UnorderedList from 'react-native-unordered-list'

const EngineScreen = () => {

    return(
        <ScrollView>
            <View style={styles.container}>
            <UnorderedList>
                <Text style={styles.text}>Engine oil to be replaced along with oil filter every 5,000 to 7,000 miles(or depending on usage)</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Belts to be replaced when damaged or old. If it has any cracks or tears. If it feels to brittle or hard</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Pulleys to be replaced when they are damaged or making harsh sounding noises</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Inspect for oil leaks if repeated oil light turns on or if oil is frequently added to engine</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Spark plugs replaced between 30,000 to 90,000 miles</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Fuel filter generally replaced every 2 years or 30,000 miles</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Fuel injector replacement depends on quality of fuel usage and fuel filter maintenance, however recommended every 50,000 to 100,000</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Gaskets to be replaced when faulty / valve cover gasket recommended replacement from 20,000 to 50,000</Text>
            </UnorderedList>
            <UnorderedList>
                <Text style={styles.text}>Air cabin filter recommended replacement every 30,000 miles</Text>
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

export default EngineScreen;