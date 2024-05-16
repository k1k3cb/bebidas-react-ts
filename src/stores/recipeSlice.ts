import { StateCreator } from 'zustand';
import { getCategories } from '../services/RecipeService';
import { Categories, SearchFilter } from '../types';

export interface RecipesSlideProps {
  categories: Categories;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilter: SearchFilter) => Promise<void>;
}

export const createRecipeSlice: StateCreator<RecipesSlideProps> = set => ({
  categories: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories
    });
  },
  searchRecipes:async (filters) => {
    console.log('filters',filters);
  },
});
