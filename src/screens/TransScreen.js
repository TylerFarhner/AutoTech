import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import UnorderedList from 'react-native-unordered-list'

const TransScreen = () => {

    return(
        <View>

            <UnorderedList>
                <Text>Check transmission fluid periodically, typical transmission fluid color is a cherry red so inspect for discoloration and fluid condition</Text>
                <Text>Avoid moving through gears while the vehicle is in motion</Text>
                <Text>With normal driving conditions, a transmission flush should be performed every 30,000 to 60,000 miles</Text>
                <Text>Transmission filter should be replaced every 30,000 miles after the 100k mile marker</Text>
            </UnorderedList>

            

        </View>
    )

}

const styles = StyleSheet.create({
    
})

export default TransScreen;