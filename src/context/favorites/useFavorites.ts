import { useContext, useCallback } from 'react';
import { IGiphy } from '../../models/giphy.model';

import { FavoritesContext } from './FavoritesContext';

// addFavorite?: (giphy: IGiphy) => void;
// removeFavorite?: (id: string) => void;

export const useFavorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addFavorite = useCallback(
    (giphy: IGiphy) => {
      setFavorites &&
        setFavorites((prev: IGiphy[]) => {
          const newFavorites: IGiphy[] = [...prev];
          const foundIndex = newFavorites.findIndex((x) => x.id === giphy.id);
          if (foundIndex === -1) {
            newFavorites.push(giphy);
            return newFavorites;
          } else return prev;
        });
    },
    [setFavorites]
  );

  const removeFavorite = useCallback(
    (id: string) => {
      setFavorites &&
        setFavorites((prev: IGiphy[]) => {
          return [...prev].filter((x) => x.id !== id);
        });
    },
    [setFavorites]
  );

  return { favorites, addFavorite, removeFavorite };
};

export default useFavorites;
