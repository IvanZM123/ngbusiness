import { createAction, props } from "@ngrx/store";

import { Product } from "../../services/product.service";

export const StartProductList = createAction(
    "[Products] Start Product List"
);

export const SuccessProductList = createAction(
    "[Products] Success Product List",
    props<{ products: Array<Product> }>()
);

export const StartProductCreate = createAction(
    "[Products] Start Product Create",
    props<{ payload: Omit<Product, "id"> }>()
);

export const SuccessProductCreate = createAction(
    "[Products] Success Product Create",
    props<{ product: Product }>()
);

export const StartProductUpdate = createAction(
    "[Products] Start Product Update",
    props<{
        id: string | number;
        data: Omit<Product, "id">
    }>()
);

export const SuccessProductUpdate = createAction(
    "[Products] Success Product Update",
    props<{ product: Product }>()
);

export const StartProductRemove = createAction(
    "[Products] Start Product Remove",
    props<{ payload: Product }>()
);

export const SuccessProductRemove = createAction(
    "[Products] Success Product Remove",
    props<{ product: Product }>()
);

export const FailureProducts = createAction(
    "[Products] Failure Products",
    props<{ error: any }>()
);
