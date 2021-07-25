import { ActionReducerMap } from "@ngrx/store";

import { ProductEffects } from "./products/products.effects";
import { ClientsEffects } from "./clients/clients.effects";
import { OrdersEffects } from "./orders/orders.effects";

import { productReducer, ProductState } from "./products/products.reducers";
import { clientReducer, ClientState } from "./clients/clients.reducers";
import { orderReducer, OrderState } from "./orders/orders.reducers";

export enum KeyStore {
    ProductStore = "productStore",
    ClientStore  = "clientStore",
    OrderStore   = "orderStore"
}

export interface Store {
    [KeyStore.ProductStore] : ProductState;
    [KeyStore.ClientStore]  : ClientState;
    [KeyStore.OrderStore]   : OrderState;
}

export const reducers: ActionReducerMap<Store> = {
    productStore : productReducer,
    clientStore  : clientReducer,
    orderStore   : orderReducer
}

export const effects = [
    ProductEffects,
    ClientsEffects,
    OrdersEffects
]
