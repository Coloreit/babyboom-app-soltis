import { ADD_PLACE, LOAD_PLACES } from "../actions/places.action";
import Place from "../../models/Place";

const initialState = {
    places: []
}

const PlacesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(action.payload.id.toString(), action.payload.title, action.payload.image, action.payload.address, action.payload.lat, action.payload.lng)
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
        default:
            return state
    }
}

export default PlacesReducer;