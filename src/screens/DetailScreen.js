import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const DetailScreen = ({ route, navigation }) => {

    const { baby } = route.params

    useEffect(() => {
        navigation.setOptions({
            title: baby.name
        })
    }, [])

    return (
    <View style={styles.screen} >
        <Text style={styles.title}>{baby.name}</Text>
        <Text style={styles.text}>FOTO</Text>
        <Text style={styles.textSub}>Precio:</Text>
        <Text style={styles.text}>${baby.price}</Text>
        <Text style={styles.textSub}>Descripción:</Text>
        <Text style={styles.text}>{baby.description}</Text>
    </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 10,
        alignItems: 'center' 
    },
    title: {
        fontFamily: 'JosefinSans_700Bold',
        fontSize: 25,
        paddingBottom: 10,
    },
    text: {
        fontFamily: 'JosefinSans_400Regular',
        fontSize: 15,
    },
    textSub: {
        fontFamily: 'JosefinSans_400Regular',
        fontSize: 15,
        textDecorationLine: 'underline',
    }
})