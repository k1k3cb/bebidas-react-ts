import { StateCreator } from 'zustand';
import { Recipe } from '../types';

export interface FavouritesSlideProps {
  favourites: Recipe[];
  handleClickFavourite: (recipe: Recipe) => void;
  favouritesExists: (id: Recipe['idDrink']) => boolean;
  loadFromStorage: () => void;
}

export const createFavouritesSlice: StateCreator<FavouritesSlideProps> = (
  set,
  get
) => ({
  favourites: [],
  handleClickFavourite: recipe => {
    if (
      get().favourites.some(favourite => favourite.idDrink === recipe.idDrink)
    ) {
      set(state => ({
        favourites: state.favourites.filter(
          favourite => favourite.idDrink !== recipe.idDrink
        )
      }));
    } else {
      console.log('no lo tienes en favoritos');
      set(state => ({ favourites: [...state.favourites, recipe] }));
    }
    localStorage.setItem('favourites', JSON.stringify(get().favourites));
  },
  favouritesExists: id => {
    return get().favourites.some(favourite => favourite.idDrink === id);
  },
  loadFromStorage: () => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      set({ favourites: JSON.parse(storedFavourites) });
    }
  }
});
