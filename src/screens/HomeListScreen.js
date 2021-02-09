import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../components/Card'
import * as houseAction from '../redux/actions/houseAction'

export default function HomeListScreen(props) {

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    

    const houses = useSelector(state => state.house.houses)

    useEffect(() => {
        setIsLoading(true)
        dispatch(houseAction.fetchHouses())
            .then(() => {
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [dispatch])

    if(isLoading) {
        return (
            <View style={ styles.centered }>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    if(houses.length === 0 && !isLoading) {
        return (
            <View style={ styles.centered }>
                <Text>No homes currently listed! Add one to see it here!</Text>
            </View>
        )
    }
    
    return (
        <View style={ styles.container }>
            <FlatList 
                data={ houses }
                keyExtractor={ item => item._id }
                renderItem={ ({item}) => (
                    <Card
                        navigation={ props.navigation }
                        title={item.title}
                        address={item.address}
                        homeType={item.homeType}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        yearBuilt={item.yearBuilt}
                        id={item._id}
                    />
                ) }
            />
            
            <FloatingAction 
                position="right"
                animated={ false }
                showBackground={ false }
                onPressMain={ () => props.navigation.navigate('AddHome') }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1
    },

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})