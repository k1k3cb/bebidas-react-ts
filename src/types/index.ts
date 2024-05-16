import { z } from "zod";
import { CategoriesAPIResponseSchema, SearchFilterSchema } from "../utils/recipes-schemas";

export type Categories=z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter=z.infer<typeof SearchFilterSchema>