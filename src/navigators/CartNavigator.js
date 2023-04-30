import { StyleSheet, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/Colors';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
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
        name='Cart' 
        component={CartScreen}
        options={{
            title: 'Carrito'
        }}
        />
    </Stack.Navigator>
    )
}

export default CartNavigator

const styles = StyleSheet.create({})