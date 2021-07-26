import { ActionReducerMap } from "@ngrx/store";

import { ProductEffects } from "./products/products.effects";
import { ClientsEffects } from "./clients/clients.effects";
import { OrdersEffects } from "./orders/orders.effects";
import { CategoriesEffects } from "./categories/categories.effects";

import { productReducer, ProductState } from "./products/products.reducers";
import { clientReducer, ClientState } from "./clients/clients.reducers";
import { orderReducer, OrderState } from "./orders/orders.reducers";
import { categoryReducer, CategoryState } from "./categories/categories.reducers";

export enum KeyStore {
    ProductStore  = "productStore",
    ClientStore   = "clientStore",
    OrderStore    = "orderStore",
    CategoryStore = "categoryStore"
}

export interface Store {
    [KeyStore.ProductStore]  : ProductState;
    [KeyStore.ClientStore]   : ClientState;
    [KeyStore.OrderStore]    : OrderState;
    [KeyStore.CategoryStore] : CategoryState;
}

export const reducers: ActionReducerMap<Store> = {
    productStore  : productReducer,
    clientStore   : clientReducer,
    orderStore    : orderReducer,
    categoryStore : categoryReducer
}

export const effects = [
    ProductEffects,
    ClientsEffects,
    OrdersEffects,
    CategoriesEffects
]
