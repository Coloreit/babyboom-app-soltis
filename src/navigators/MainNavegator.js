import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'

const MainNavegator = () => {
    return (
    <NavigationContainer>
        <TabsNavigator />
    </NavigationContainer>
    )
}

export default MainNavegator

const styles = StyleSheet.create({})