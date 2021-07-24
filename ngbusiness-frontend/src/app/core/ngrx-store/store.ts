import { ActionReducerMap } from "@ngrx/store";

import { ProductEffects } from "./products/products.effects";
import { ClientsEffects } from "./clients/clients.effects";

import { productReducer, ProductState } from "./products/products.reducers";
import { clientReducer, ClientState } from "./clients/clients.reducers";

export interface Store {
    productStore : ProductState;
    clientStore  : ClientState;
}

export const reducers: ActionReducerMap<Store> = {
    productStore : productReducer,
    clientStore  : clientReducer
}

export const effects = [
    ProductEffects,
    ClientsEffects
]
