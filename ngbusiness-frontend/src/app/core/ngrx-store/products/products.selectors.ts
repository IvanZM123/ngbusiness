import { createFeatureSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { productAdapter, ProductState } from "./products.reducers";

export const getStateProducts: MemoizedSelector<
    object,
    ProductState,
    DefaultProjectorFn<ProductState>
> = createFeatureSelector<ProductState>("productStore");

const { selectAll } = productAdapter.getSelectors(getStateProducts);

export const getListProducts = selectAll;
