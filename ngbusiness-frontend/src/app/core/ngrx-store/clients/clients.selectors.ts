import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";

import { ClientState, clientAdapter } from "./clients.reducers";
import { KeyStore } from "../store";
import { Client } from "../../services/client.service";

export const getStateProducts: MemoizedSelector<
    object,
    ClientState,
    DefaultProjectorFn<ClientState>
> = createFeatureSelector<ClientState>(KeyStore.ClientStore);

const { selectAll } = clientAdapter.getSelectors(getStateProducts);

export const getListClients = selectAll;

export const getClientList = (max: number = 10) => createSelector(
    getStateProducts,
    ({ entities }) => Object.keys(entities)
    .map(key => entities[key] as Client)
    .filter((_, index) => (index + 1) <= max)
);
