import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import OrderItems from '../components/OrderItems'
import { ORDERS } from '../data/orders'

const OrdersScreen = () => {

    const onDelete = (item) => {
        console.log('delete', item);
    }

    const renderItems = ({item}) => <OrderItems item={item} onDelete={onDelete} />

    return (
    <FlatList 
        data={ORDERS}
        renderItem={renderItems}
        keyExtractor={item => item.id}
    />
    )
}

export default OrdersScreen

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        flex: 1,
    }
})