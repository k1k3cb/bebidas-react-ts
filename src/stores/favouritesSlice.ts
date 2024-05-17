import { StateCreator } from 'zustand';
import { Recipe } from '../types';
import {
  NotificationSlideProps,
  createNotificationSlice
} from './notificationSlice';

export interface FavouritesSlideProps {
  favourites: Recipe[];
  handleClickFavourite: (recipe: Recipe) => void;
  favouritesExists: (id: Recipe['idDrink']) => boolean;
  loadFromStorage: () => void;
}

export const createFavouritesSlice: StateCreator<
  FavouritesSlideProps & NotificationSlideProps,
  [],
  [],
  FavouritesSlideProps
> = (set, get, api) => ({
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
      createNotificationSlice(set, get, api).showNotification({
        text: 'Receta eliminada de favoritos',
        error: false
      });
    } else {
      set(state => ({ favourites: [...state.favourites, recipe] }));
      createNotificationSlice(set, get, api).showNotification({
        text: 'Receta agregada a favoritos',
        error: false
      });
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
