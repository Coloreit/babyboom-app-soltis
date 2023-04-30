export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

export const addPlace = (title) => {
    return { type: ADD_PLACE, payload: {title}}
}