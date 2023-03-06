import { combineReducers } from "redux";

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';

// export default movieReducer;

const rootReducer = combineReducers({
    movieR: movieReducer,
    favoriteR: favoriteReducer
})

export default rootReducer;
