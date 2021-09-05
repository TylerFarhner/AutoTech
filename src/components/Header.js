import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Auto Tech</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        padding: 15,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },

    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff'
    }
})

export default Header;