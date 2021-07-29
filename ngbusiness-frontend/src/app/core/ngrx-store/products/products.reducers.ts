import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as actions from "./product.actions";

import { Product } from "../../services/product.service";

export interface ProductState extends EntityState<Product> {
    error: any;
};

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({});

export const initialProductState = productAdapter.getInitialState({
    error: null
});

const _productReducer = createReducer(initialProductState,
    // Add all the products.
    on(actions.SuccessProductList, (state, { products }) =>
        productAdapter.addMany(products,
            { ...state, error: null, notification: null }
        )
    ),

    on(actions.SuccessProductCreate, (state, { product }) =>
        productAdapter.addOne(product, { ...state, error: null })
    ),

    on(actions.SuccessProductUpdate, (state, { product }) =>
        productAdapter.updateOne(
            { id: product.id, changes: product },
            { ...state, error: null }
        )
    ),

    on(actions.SuccessProductRemove, (state, { product }) =>
        productAdapter.removeOne(product.id, { ...state, error: null })
    ),

    // Add the error.
    on(actions.FailureProducts, (state, { error }) => ({ ...state, error }))
);

export function productReducer(state = initialProductState, action: Action) {
    return _productReducer(state, action);
};