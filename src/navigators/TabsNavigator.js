import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants/colors';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrdersScreen from '../screens/OrdersScreen';

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
    <BottomTabs.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
    >
        <BottomTabs.Screen name='Shop-tab' component={ShopNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <Ionicons name='md-home' size={24} color={focused ? COLORS.celeste : COLORS.rosa}/>
                        <Text style={{ color: focused ? COLORS.celeste : COLORS.rosa }}>Shop</Text>
                    </View>
                )
            }}
        />
        <BottomTabs.Screen name='Cart-tab' component={CartNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <Ionicons name='md-cart' size={24} color={focused ? COLORS.celeste : COLORS.rosa}/>
                        <Text style={{ color: focused ? COLORS.celeste : COLORS.rosa }}>Cart</Text>
                    </View>
                )
            }}
        />
        <BottomTabs.Screen name='Orders-tab' component={OrdersScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <Ionicons name='md-list' size={24} color={focused ? COLORS.celeste : COLORS.rosa}/>
                        <Text style={{ color: focused ? COLORS.celeste : COLORS.rosa }}>Ordenes</Text>
                    </View>
                )
            }}
        />
    </BottomTabs.Navigator>
    )
}

export default TabsNavigator

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#34c4cc',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 10,
        height: 90,
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})