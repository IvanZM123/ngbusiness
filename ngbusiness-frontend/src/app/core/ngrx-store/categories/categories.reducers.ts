import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, Action, on } from "@ngrx/store";

import { Category } from "../../services/category.service";

import * as actions from "./categories.actions";

export interface CategoryState extends EntityState<Category> {
    error: any;
}

export const categoryAdapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialCategoryState = categoryAdapter.getInitialState({
    error: null
});

const _categoryReducer = createReducer(initialCategoryState,
    on(actions.SuccessCategoryList, (state, { categories }) =>
        categoryAdapter.addMany(categories, { ...state, error: null })
    ),

    on(actions.FailureCategories, (state, { error }) => ({ ...state, error }))
);

export function categoryReducer(state = initialCategoryState, action: Action) {
    return _categoryReducer(state, action);
}
