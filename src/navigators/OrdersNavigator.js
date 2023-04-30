import { StyleSheet, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/Colors';
import OrdersScreen from '../screens/OrdersScreen';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? COLORS.celeste : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.celeste,
        headerTitleStyle: {
        fontFamily: 'JosefinSans_700Bold'
        }
    }}>
        <Stack.Screen 
        name='Orders' 
        component={OrdersScreen}
        options={{
            title: 'Ordenes anteriores'
        }}
        />
    </Stack.Navigator>
    )
}

export default OrdersNavigator