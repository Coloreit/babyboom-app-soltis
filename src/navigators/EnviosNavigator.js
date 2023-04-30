import { StyleSheet, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/colors';
import EnviosScreen from '../screens/EnviosScreen';

const Stack = createNativeStackNavigator();

const EnviosNavigator = () => {
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
        name='Envios' 
        component={EnviosScreen}
        options={{
            title: 'Envíos'
        }}
        />
    </Stack.Navigator>
    )
}

export default EnviosNavigator

const styles = StyleSheet.create({})