import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
    <Stack.Navigator
        initialRouteName='Register'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='Regster' component={RegisterScreen} />
    </Stack.Navigator>
    )
}

export default AuthNavigator

const styles = StyleSheet.create({})