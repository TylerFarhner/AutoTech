import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import UnorderedList from 'react-native-unordered-list'

const DiffScreen = () => {

    return(
        <View style={styles.container}>

            <UnorderedList>
                <Text style={styles.text}>Differential fluid should be replaced every 30,000 to 60,000 miles</Text>
                <UnorderedList>
                    <Text style={styles.text}>Contrary to statistics, some manufacturers argue that differential fluid is lifelong</Text>
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

export default DiffScreen;