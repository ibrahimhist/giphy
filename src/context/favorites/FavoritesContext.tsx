import React, { createContext, useEffect, useState } from 'react';

import { IGiphy } from '../../models/giphy.model';

interface IFavoritesContext {
  favorites: IGiphy[];
  setFavorites?: React.Dispatch<React.SetStateAction<IGiphy[]>>;
}

function getStorageValue(key: string, defaultValue: any) {
  // getting stored value
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
}

const STORAGE_KEY = 'favorites';

const defaultState = {
  favorites: getStorageValue(STORAGE_KEY, []),
};

export const FavoritesContext = createContext<IFavoritesContext>(defaultState);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<IGiphy[]>(defaultState.favorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
