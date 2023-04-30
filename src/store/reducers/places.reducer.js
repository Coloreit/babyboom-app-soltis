import { ADD_PLACE, LOAD_PLACES } from "../actions/places.action";
import Place from "../../models/Place";

const initialState = {
    places: []
}

const PlacesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.payload.title)
            return {
                ...state,
                places: state.places.concat(newPlace)
            }
        default:
            return state
    }
}

export default PlacesReducer;