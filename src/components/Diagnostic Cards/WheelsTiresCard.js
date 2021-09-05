import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function WheelsTiresCard(props) {
    return (
            <View style={styles.card}>
                <View>
                    <Text>Wheels & Tires Maintenance</Text>
                </View>
            </View>
        
    );
}

const styles = StyleSheet.create({

    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
        }
})