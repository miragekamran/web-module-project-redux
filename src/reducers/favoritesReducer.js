import { TOGGLE_FAVORITES } from "../actions/favoritesActions";


const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
                displayFavorites: true
            }
        default:
            return state;
    }
};

export default favoriteReducer;