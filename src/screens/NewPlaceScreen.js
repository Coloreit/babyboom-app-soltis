import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors';
import { useDispatch } from 'react-redux'
import { addPlace } from '../store/actions/places.action';

const NewPlaceScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const [titleValue, setTitleValue] = React.useState('')

  const titleChangeHandler = text => {
    setTitleValue(text)
  }

  const savePlaceHandler = () => {
    dispatch(addPlace(titleValue))
    navigation.navigate('Direcciones')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nueva dirección</Text>
        <TextInput style={styles.input} onChangeText={titleChangeHandler} />
        
        <Button title="Guardar" color={COLORS.celeste} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  )
}

export default NewPlaceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 20,
    fontFamily: 'JosefinSans_400Regular',
    marginBottom: 16
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4
  }
})