import React from 'react';

import { Link } from 'react-router-dom';
import GiphyList from '../../components/GiphyList/GiphyList';

import useFavorites from '../../context/favorites/useFavorites';

import './FavoriteGiphies.scss';

export const FavoriteGiphies = () => {
  const { favorites, removeFavorite } = useFavorites();

  const handleUndoFavorite = (id: string) => removeFavorite(id);

  return (
    <div className='favorite-giphies'>
      <h3>
        <Link to='/'>Giphy Search</Link>
      </h3>
      {favorites.length ? (
        <div className='giphy-list'>
          <GiphyList datasource={favorites} onUndo={handleUndoFavorite} />
        </div>
      ) : (
        <h1>There is no favorite giphy.</h1>
      )}
    </div>
  );
};

export default FavoriteGiphies;
