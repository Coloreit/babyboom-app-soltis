import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'

const DetailScreen = () => {

    const product = useSelector(state => state.products.selected)
    const dispatch = useDispatch();
    const onHandleAddToCart = () => {
        dispatch(addItem({...product, quantity:1}))
    }

    return (
    <View style={styles.screen} >
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.text}>FOTO</Text>
        <Text style={styles.textSub}>Precio:</Text>
        <Text style={styles.text}>${product.price}</Text>
        <Text style={styles.textSub}>Descripción:</Text>
        <Text style={styles.text}>{product.description}</Text>
        <Button title='Agregar producto' onPress={() => {
            onHandleAddToCart()
        }}/>
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