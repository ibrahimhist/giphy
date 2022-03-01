import React, { createContext, useState } from 'react';

import { IGiphy } from '../../models/giphy.model';

interface IFavoritesContext {
  favorites: IGiphy[];
  setFavorites?: React.Dispatch<React.SetStateAction<IGiphy[]>>;
}

const defaultState = {
  favorites: [],
};

export const FavoritesContext = createContext<IFavoritesContext>(defaultState);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<IGiphy[]>(defaultState.favorites);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
