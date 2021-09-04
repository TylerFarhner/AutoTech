import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import UnorderedList from 'react-native-unordered-list'

const EngineScreen = () => {

    return(
        <View>
            <UnorderedList>
                <Text>Engine oil to be replaced along with oil filter every 5,000 to 7,000 miles(or depending on usage)</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Belts to be replaced when damaged or old. If it has any cracks or tears. If it feels to brittle or hard</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Pulleys to be replaced when they are damaged or making harsh sounding noises</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Inspect for oil leaks if repeated oil light turns on or if oil is frequently added to engine</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Spark plugs replaced between 30,000 to 90,000 miles</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Fuel filter generally replaced every 2 years or 30,000 miles</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Fuel injector replacement depends on quality of fuel usage and fuel filter maintenance, however recommended every 50,000 to 100,000</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Gaskets to be replaced when faulty / valve cover gasket recommended replacement from 20,000 to 50,000</Text>
            </UnorderedList>
            <UnorderedList>
                <Text>Air cabin filter recommended replacement every 30,000 miles</Text>
            </UnorderedList>
        </View>
    )

}

const styles = StyleSheet.create({
    
})

export default EngineScreen;