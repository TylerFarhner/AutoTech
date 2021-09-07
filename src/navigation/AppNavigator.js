import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import GMScreen from '../screens/GMScreen'
import EngineScreen from '../screens/EngineScreen'
import BrakeScreen from '../screens/BrakeScreen'
import CoolingScreen from '../screens/CoolingScreen'
import WheelsTiresScreen from '../screens/WheelsTiresScreen'
import SuspensionScreen from '../screens/SuspensionScreen'
import ACScreen from '../screens/ACScreen'
import TransScreen from '../screens/TransScreen'
import DiffScreen from '../screens/DiffScreen'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


// ---------------------------------- STACK NAV -------------------------------
function stackNavigator () {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Indicator Lights"
                component={HomeScreen}
            />
            {/* <Stack.Screen 
                name="Details"
                component={GMScreen}
            /> */}
        </Stack.Navigator>
    );
}


//  -------------------------------- GM STACK NAV -----------------------------
function GMStackNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="General Maintenance"
                component={ GMScreen }
            />
            <Stack.Screen 
                name="Engine"
                component={EngineScreen}
            />
            <Stack.Screen 
                name="Brakes"
                component={BrakeScreen}
            />
            <Stack.Screen 
                name="Cooling"
                component={CoolingScreen}
            />
            <Stack.Screen 
                name="Wheels & Tires"
                component={WheelsTiresScreen}
            />
            <Stack.Screen 
                name="Suspension"
                component={SuspensionScreen}
            />
            <Stack.Screen 
                name="Air Conditioning"
                component={ACScreen}
            />
            <Stack.Screen 
                name="Transmission"
                component={TransScreen}
            />
            <Stack.Screen 
                name="Differential"
                component={DiffScreen}
            />
        </Stack.Navigator>
    )
}


// -------------------------- DRAWER NAV ----------------------------
const HeaderLeft = () => {
    const navigation = useNavigation();

    return (
        <MaterialIcons name="menu" size={24} onPress={() => { navigation.openDrawer() }} />
    )
}

function AboutNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
            <Stack.Screen name="About" component={ AboutScreen } />
        </Stack.Navigator>
    )
}



function AppNavigator() {
    return (
        <NavigationContainer>
                <Tab.Navigator
                // --------- ICONS -----------------
                    screenOptions={({ route }) => ({
                        tabBarIcon: () => {
                            let iconName;
                            if(route.name=="Indicator Lights") {
                                iconName = "home"
                            } else if(route.name=="General Maintenance") {
                                iconName = "info"
                            }

                            return <MaterialIcons name={iconName} size={24}/>
                        }
                    })}
                // ---------- /ICONS ----------------

                // ---------- BOTTOM NAMES ----------- 
                >
                    <Tab.Screen 
                        name="Indicator Lights"
                        component={ stackNavigator }
                    />

                    <Tab.Screen 
                        name="General Maintenance"
                        component={ GMStackNavigator }
                    />
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;