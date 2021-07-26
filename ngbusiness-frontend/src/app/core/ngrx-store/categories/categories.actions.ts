import { createAction, props } from "@ngrx/store";

import { Category } from "../../services/category.service";

export const StartCategoryList = createAction(
    "[Categories] Start Category List"
);

export const SuccessCategoryList = createAction(
    "[Categories] Success Category List",
    props<{ categories: Array<Category> }>()
);

export const FailureCategories = createAction(
    "[Categories] Failure Categories",
    props<{ error: any }>()
);
