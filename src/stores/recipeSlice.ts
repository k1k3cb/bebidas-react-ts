import { StateCreator } from 'zustand';
import { getCategories, getRecipes } from '../services/RecipeService';
import { Categories, Drinks, SearchFilter } from '../types';

export interface RecipesSlideProps {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilter: SearchFilter) => Promise<void>;
}

export const createRecipeSlice: StateCreator<RecipesSlideProps> = set => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories
    });
  },
  searchRecipes: async filters => {
    const drinks = await getRecipes(filters);
    set({drinks})
    
  }
});
