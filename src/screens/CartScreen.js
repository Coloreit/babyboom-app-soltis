import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { removeItem } from '../store/actions/cart.action';

const CartScreen = () => {

    const cart = useSelector(state=>state.cart.items)
    const total = useSelector(state=>state.cart.total)

    const onHandleConfirm = ()=>console.log("Confirmar");
    const onHandleDeleteItem=(itemId)=>{
        console.log("Eliminar item");
        dispatch(removeItem(itemId))
    }

    const renderItems = ({item}) => (
        <CartItem item={item} onDelete={onHandleDeleteItem} />
    )

    const dispatch = useDispatch();

    return (
    <View style={styles.container}>
        <FlatList 
        style={styles.list}
            data={cart}
            renderItem={renderItems}
            keyExtractor={(item) => item.id}
        />
        <View style={styles.footer}>
            <TouchableOpacity style={styles.confirm} onPress={onHandleConfirm} >
                <View style={styles.total}>
                    <Text style={styles.text}>Total: </Text>
                    <Text style={styles.text}>${total} </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
        backgroundColor: '#fff',
        paddingBottom:120,
        },
        list: {
        flex:1, 
        },
        footer: {
        padding:12,
        borderTopColor: "#ccc",
        borderTopWidth:1,
        },
        confirm:{
        backgroundColor:"#F5F5F5",
        borderRadius:10,
        padding:10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        },
        total:{
        flexDirection: 'row',
        },
        text:{
        fontSize:18,
        fontFamily:'JosefinSans_700Bold',
        padding:8,
        }
})