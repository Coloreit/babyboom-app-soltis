import { Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen.js';
import NewPlaceScreen from '../screens/NewPlaceScreen.js';
import MapScreen from '../screens/MapScreen.js';

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
        name='Direcciones'
        component={PlaceListScreen}
        options={({ navigation }) => ({
            title: 'Envíos',
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                    <Ionicons name='md-add' color={Platform.OS === 'android' ? 'white' : COLORS.celeste} size={23} />
                </TouchableOpacity>
            )
        })}
        />
        <Stack.Screen 
        name='Detalle'
        component={PlaceDetailScreen}
        options={{ title: 'Detalle direccion' }}
        />
        <Stack.Screen 
        name='Nuevo'
        component={NewPlaceScreen}
        options={{ title: 'Nueva direccion' }}
        />
        <Stack.Screen 
        name='Map'
        component={MapScreen}
        options={{ title: 'Mapa' }}
        />
    </Stack.Navigator>
    )
}

export default EnviosNavigator