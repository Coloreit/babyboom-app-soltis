import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItems from '../components/OrderItems'
import { getOrders, deleteOrder } from '../store/actions/orders.action'

const OrdersScreen = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state=>state.orders.list)

    React.useEffect(()=>{
        dispatch(getOrders())
    }, [])

    const onHandleDelete = (id) => {
        console.log('delete');
        dispatch(deleteOrder(id))
    }

    const renderItems = ({item}) => (
        <OrderItems 
            item={item} 
            onDelete={onHandleDelete} />
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                renderItem={renderItems}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default OrdersScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})