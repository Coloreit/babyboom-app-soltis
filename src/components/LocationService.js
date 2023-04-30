import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors';
import * as Location from 'expo-location'
import MapPreview from './MapPreview';

const LocationService = ({ onLocation }) => {

    const [location, setLocation] = React.useState(null)

    const handleGeolocation = async () => {
        const hasPermission = await verifyGeolocationPermission()
        if (!hasPermission) return

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        })
        console.log(location);
        setLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
        onLocation(location.coords.latitude, location.coords.longitude)
    }

    const verifyGeolocationPermission = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert('No se puede acceder a la ubicación')
            return false
        }
        return true
    }

    return (
    <View style={styles.container}>
        <MapPreview mapStyle={styles.preview} location={location} >
            <Text> Esperando ubicación... </Text>
        </MapPreview>
        <View style={styles.actions}>
            <Button title='Obtener Ubicación' color={COLORS.naranja} onPress={handleGeolocation} />
        </View>
    </View>
    )
}

export default LocationService

const styles = StyleSheet.create({
container: {
    marginBottom: 10
},
preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.verde,
    borderWidth: 1
},
image: {
    width: '100%',
    height: '100%'
},
actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
}
})