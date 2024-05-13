import { createReducer, on } from "@ngrx/store";

import * as actions from "./actions";
import { initialState } from "./state";

export const categoriesReducer = createReducer(
  initialState,
  on(actions.addCategory, (state, {category}) => ({
    ...state,
    categories: [...state.categories, category],
  })),
  on(actions.deleteCategory, (state, {name}) => ({
    ...state,
    categories: state.categories.filter(
      (cat) => cat.name !== name
    ), // filter out the deleted category
  })),
  on(actions.deleteAllCategories, (state) => ({ ...state, categories: [] })),
);
