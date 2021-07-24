import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, Action, on } from "@ngrx/store";

import * as actions from "./clients.actions";

import { Client } from "../../services/client.service";

export interface ClientState extends EntityState<Client> {
    error: null;
}

export const clientAdapter: EntityAdapter<Client> = createEntityAdapter({});

const initialClientState = clientAdapter.getInitialState({
    error: null
});

const _clientReducer = createReducer(initialClientState,
    on(actions.SuccessClientList, (state, { clients }) =>
        clientAdapter.addMany(clients, { ...state, error: null })
    ),

    on(actions.SuccessClientCreate, (state, { client }) =>
        clientAdapter.addOne(client, { ...state, error: null })
    ),

    on(actions.FailureClients, (state, { error }) => ({ ...state, error }))
);

export function clientReducer(state = initialClientState, action: Action) {
    return _clientReducer(state, action);
}
