import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";

import { productAdapter, ProductState } from "./products.reducers";
import { KeyStore } from "../store";

export const getStateProducts: MemoizedSelector<
    object,
    ProductState,
    DefaultProjectorFn<ProductState>
> = createFeatureSelector<ProductState>(KeyStore.ProductStore);

const { selectAll } = productAdapter.getSelectors(getStateProducts);

export const getListProducts = selectAll;

export const getProductById = (id: string | number) => createSelector(
    getStateProducts,
    ({ entities }) => entities[id]
);
