import { createAction, props } from "@ngrx/store";
import { Category } from "./state";

export const addCategory = createAction(
  "[Category List] Add Category",
  props<{ category: Category }>()
);

export const deleteCategory = createAction(
  "[Category List] Delete Category",
  props<{name: string}>()
);

export const updateCategory =  createAction(
  "[Category List] Update Category",
  props<{name: string}>()
);

export const deleteAllCategories =  createAction(
  "[Category List] Delete All Categories"
);
