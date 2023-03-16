import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsScreen from '../screens/ProductsScreen'
import DetailScreen from '../screens/DetailScreen'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={CategoriesScreen}/>
                <Stack.Screen name='ProductsList' component={ProductsScreen}/>
                <Stack.Screen name='Details' component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator