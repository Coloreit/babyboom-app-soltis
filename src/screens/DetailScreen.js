import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = () => {
    return (
    <View style={styles.screen} >
        <Text style={styles.text}>DetailScreen</Text>
    </View>
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