import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants/Colors';
import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator';
import EnviosNavigator from './EnviosNavigator'

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
        <BottomTabs.Screen name='Orders-tab' component={OrdersNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
                        <Ionicons name='md-list' size={24} color={focused ? COLORS.celeste : COLORS.rosa}/>
                        <Text style={{ color: focused ? COLORS.celeste : COLORS.rosa }}>Ordenes</Text>
                    </View>
                )
            }}
        />
        <BottomTabs.Screen name='Envios-tab' component={EnviosNavigator}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIcon}>
						<MaterialCommunityIcons name="truck-fast" size={28} color={focused ? COLORS.celeste : COLORS.rosa}/>
                        <Text style={{ color: focused ? COLORS.celeste : COLORS.rosa }}>Envíos</Text>
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
        position: 'absolute',
        height: 60,
    },
    tabBarIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})