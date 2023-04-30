import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors';
import { useDispatch } from 'react-redux'
import { addPlace } from '../store/actions/places.action';
import ImageSelector from '../components/ImageSelector';
import LocationService from '../components/LocationService';

const NewPlaceScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const [titleValue, setTitleValue] = React.useState('')
  const [imageValue, setImageValue] = React.useState('')
  const [locationValue, setLocationValue] = React.useState()

  const titleChangeHandler = text => {
    setTitleValue(text)
  }

  const savePlaceHandler = () => {
    dispatch(addPlace(titleValue, imageValue, locationValue))
    navigation.navigate('Direcciones')
  }
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nueva dirección</Text>
        <TextInput style={styles.input} onChangeText={titleChangeHandler} />
        <ImageSelector onImage={image=>setImageValue(image)} />
        <LocationService onLocation={(lat, lng)=>setLocationValue({lat, lng})}/>
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