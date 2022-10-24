import React, { useState } from 'react';
import { PokemonResponse } from '../@types/api';


interface FavoriteContextProps {
  favorites: PokemonResponse[];
  setFavorites: React.Dispatch<React.SetStateAction<PokemonResponse[]>>;
  
  
}
interface FavoriteProps  {
    children: React.ReactNode;
}

const INITAL_FAVORITES_VALUE: PokemonResponse[] = [];

// create context
export const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: INITAL_FAVORITES_VALUE,
  setFavorites: () => console.warn(`setFavorites is not ready`),
  
});

export const FavoriteProvider: React.FC<FavoriteProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<PokemonResponse[]>(INITAL_FAVORITES_VALUE);

  return (
    <FavoriteContext.Provider value={{
      favorites,
      setFavorites,
    }}>
      {children}
    </FavoriteContext.Provider>
  );
};