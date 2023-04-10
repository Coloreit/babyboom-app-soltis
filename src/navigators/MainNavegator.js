import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import AuthNavigator from './AuthNavigator'
import { useSelector } from 'react-redux'

const MainNavegator = () => {

    const isAuth = useSelector(state => state.auth.userId);

    return (
    <NavigationContainer>
        {isAuth ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    )
}

export default MainNavegator

const styles = StyleSheet.create({})