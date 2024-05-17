import { StateCreator } from 'zustand';
import {
  getCategories,
  getRecipeById,
  getRecipes
} from '../services/RecipeService';
import { Categories, Drink, Drinks, Recipe, SearchFilter } from '../types';

export interface RecipesSlideProps {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink']) => Promise<void>;
  closeModal: () => void;
}

export const createRecipeSlice: StateCreator<RecipesSlideProps> = set => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  modal: false,
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories
    });
  },
  searchRecipes: async filters => {
    const drinks = await getRecipes(filters);
    set({ drinks });
  },
  selectRecipe: async id => {
    const selectedRecipe = await getRecipeById(id);
    set({ selectedRecipe, modal: true });
  },
  closeModal: () => set({ modal: false, selectedRecipe: {} as Recipe })
});
