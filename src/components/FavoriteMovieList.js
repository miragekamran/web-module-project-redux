import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { addFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
    const favorites = [];
    
    return (
        <div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {favorites.map((movie) => {
                return (
                    <div key={movie.id}>
                        <Link
                            className="btn btn-light savedButton"
                            to={`/movies/${movie.id}`}
                        >
                            {movie.title}
                            <span>
                                <span class="material-icons">
                                    remove_circle
                                </span>
                            </span>
                        </Link>
                    </div>
                );
            })}
            <span className="delete" onClick={""}>
                <input
                    type="button"
                    className="m-2 btn btn-danger"
                    value="Remove Fav"
                />
            </span>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteReducer,
        displayFavorites: state.displayFavorites,
    };
};


export default connect(mapStateToProps, {addFavorite})(FavoriteMovieList);