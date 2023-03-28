import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const DetailScreen = ({ }) => {

    const product = useSelector(state => state.products.selected)

    return (
    <View style={styles.screen} >
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.text}>FOTO</Text>
        <Text style={styles.textSub}>Precio:</Text>
        <Text style={styles.text}>${product.price}</Text>
        <Text style={styles.textSub}>Descripción:</Text>
        <Text style={styles.text}>{product.description}</Text>
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