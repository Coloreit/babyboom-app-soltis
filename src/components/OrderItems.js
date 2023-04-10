import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const formatDay = (time) => {
    const date= new Date(time)
    return date.toLocaleDateString();
}

const OrderItems = ({ item, onDelete }) => {
    return (
    <View style={styles.order}>
        <View>
            <Text style={styles.date}> {formatDay(item.date)} </Text>
            <Text style={styles.total}> $ {item.total} </Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item)}>
            <Ionicons name='md-trash' size={24} color='red'/>
        </TouchableOpacity>
    </View>
    )
}

export default OrderItems

const styles = StyleSheet.create({
    order: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: '#ccc',
        bordertWidth: 1,
        borderRadius: 10,
    },
    date: {
        fontSize: 16,
    },
    total: {
        fontSize: 18,
        fontFamily: 'JosefinSans_700Bold'
    }
})