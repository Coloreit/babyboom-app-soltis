import * as FileSystem from 'expo-file-system';
import STATIC_MAP_API_KEY from '../../constants/keys';
import { insertAddress } from '../../db';

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

export const addPlace = (title, image, location) => {
    return async dispatch => {

        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${STATIC_MAP_API_KEY}`)
        if(!response.ok){
            throw new Error('Respuesta invalida')
        }

        const resData = await response.json()
        if(!resData.results){
            throw new Error('No se pudo encontrar la direccion')
        }

        const address = resData.results[0].formatted_address
        console.log('address', address)

        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        const dbResult = await insertAddress(title, Path, address, location.lat, location.lng)
        
        dispatch({
            type: ADD_PLACE, 
            payload: {id:dbResult.insertId,
                title, 
                image: Path, 
                address, 
                lat: location.lat, 
                lng: location.lng
            }
        })
    }
}