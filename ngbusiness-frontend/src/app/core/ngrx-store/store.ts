import { ActionReducerMap } from "@ngrx/store";

import { ProductEffects } from "./products/products.effects";

import { productReducer, ProductState } from "./products/products.reducers";

export interface Store {
    productStore: ProductState
}

export const reducers: ActionReducerMap<Store> = {
    productStore: productReducer
}

export const effects = [
    ProductEffects
]