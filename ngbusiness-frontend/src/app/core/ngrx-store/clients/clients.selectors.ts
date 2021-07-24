import { createFeatureSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { ClientState, clientAdapter } from "./clients.reducers";

export const getStateProducts: MemoizedSelector<
    object,
    ClientState,
    DefaultProjectorFn<ClientState>
> = createFeatureSelector<ClientState>("clientStore");

const { selectAll } = clientAdapter.getSelectors(getStateProducts);

export const getListClients = selectAll;

