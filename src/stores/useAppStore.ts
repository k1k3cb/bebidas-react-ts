import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipesSlideProps, createRecipeSlice } from './recipeSlice';

export const useAppStore = create<RecipesSlideProps>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a)
  }))
);
