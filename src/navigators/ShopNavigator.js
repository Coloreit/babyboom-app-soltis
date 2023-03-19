import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsScreen from '../screens/ProductsScreen'
import DetailScreen from '../screens/DetailScreen'
import { COLORS } from '../constants/colors'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.celeste : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.celeste,
                headerTitleStyle: {
                fontFamily: 'JosefinSans_700Bold'
                }
            }}
        >
            <Stack.Screen
                name='Home'
                component={CategoriesScreen}
                options={{
                title: 'BabyBoom'
                }}
            />
            <Stack.Screen
                name='Products'
                component={ProductsScreen}
                options={({ route }) => ({ 
                    title: route.params.categoryName 
                })}
            />
            <Stack.Screen
                name='Details'
                component={DetailScreen}
                />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default ShopNavigator