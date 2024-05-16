import axios from 'axios';
import { SearchFilter } from '../types';
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema
} from '../utils/recipes-schemas';

export const getCategories = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const { data } = await axios(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
};

export const getRecipes = async (filters: SearchFilter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios(url);

  const result = DrinksAPIResponseSchema.safeParse(data);


  if (result.success) {
    return result.data;
  }
};
