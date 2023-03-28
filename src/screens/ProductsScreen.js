import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectedProduct, filterProduct } from '../store/actions/products.action'

const CategoriesScreen = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const categoryProducts = useSelector(state => state.products.filteredProducts)
    const category = useSelector(state => state.categories.selected)

    useEffect(()=>{
        dispatch(filterProduct(category.id))
    },[])

    const handleOnSelected = (item) => {
        dispatch(selectedProduct(item.id))
        navigation.navigate('Details', {
            name:item.title
        })
    }

    const renderProductItem = ({ item }) => (<ProductItem item={item} onSelected={handleOnSelected} />)

    return (
        <FlatList 
            data={categoryProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderProductItem}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({ })