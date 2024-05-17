import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { FavouritesSlideProps, createFavouritesSlice } from './favouritesSlice';
import {
  NotificationSlideProps,
  createNotificationSlice
} from './notificationSlice';
import { RecipesSlideProps, createRecipeSlice } from './recipeSlice';

export const useAppStore = create<
  RecipesSlideProps & FavouritesSlideProps & NotificationSlideProps
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavouritesSlice(...a),
    ...createNotificationSlice(...a)
  }))
);
