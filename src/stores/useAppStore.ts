import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { FavouritesSlideProps, createFavouritesSlice } from './favouritesSlice';
import { RecipesSlideProps, createRecipeSlice } from './recipeSlice';

export const useAppStore = create<RecipesSlideProps & FavouritesSlideProps>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavouritesSlice(...a)
  }))
);
