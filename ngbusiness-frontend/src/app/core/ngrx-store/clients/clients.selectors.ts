import { createFeatureSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";

import { ClientState, clientAdapter } from "./clients.reducers";
import { KeyStore } from "../store";

export const getStateProducts: MemoizedSelector<
    object,
    ClientState,
    DefaultProjectorFn<ClientState>
> = createFeatureSelector<ClientState>(KeyStore.ClientStore);

const { selectAll } = clientAdapter.getSelectors(getStateProducts);

export const getListClients = selectAll;

