import { createFeatureSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";

import { categoryAdapter, CategoryState } from "./categories.reducers";
import { KeyStore } from "../store";

export const getStateCategories: MemoizedSelector<
    object,
    CategoryState,
    DefaultProjectorFn<CategoryState>
> = createFeatureSelector<CategoryState>(KeyStore.CategoryStore);

const { selectAll } = categoryAdapter.getSelectors(getStateCategories);

export const getCategoryList = selectAll;
