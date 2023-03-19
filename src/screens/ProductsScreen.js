import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from '../components/ProductItem'

import { PRODUCTS } from '../data/products'

const CategoriesScreen = ({ navigation, route }) => {

    const { categoryId } = route.params
    
    const products = PRODUCTS.filter(prod => prod.category === categoryId)

    const handleOnSelected = (item) => {
        navigation.navigate('Details', {
            baby: item
        })
    }

    const renderProductItem = ({ item }) => (<ProductItem item={item} onSelected={handleOnSelected} />)

    return (
        <FlatList 
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'JosefinSans_400Regular',
        fontSize: 20,
        paddingBottom: 20,
    }
})