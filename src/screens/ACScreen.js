import React from "react";
import {StyleSheet, View, Text} from 'react-native'

import UnorderedList from 'react-native-unordered-list'

const ACScreen = () => {

    return(
        <View style={styles.container}>
            <UnorderedList>
                <Text>Refill A/C unit with fresh refrigerant every 1-2 years.</Text>
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

export default ACScreen;