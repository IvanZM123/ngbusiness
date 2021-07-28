import { createAction, props } from "@ngrx/store";

import { Client } from "../../services/client.service";

export const StartClientList = createAction(
    "[Clients] Start Client List"
);

export const SuccessClientList = createAction(
    "[Clients] Success Client List",
    props<{ clients: Array<Client> }>()
);

export const StartClientCreate = createAction(
    "[Clients] Start Client Create",
    props<{ payload: Omit<Client, "id"> }>()
);

export const SuccessClientCreate = createAction(
    "[Clients] Success Client Create",
    props<{ client: Client }>()
);

export const StartClientRemove = createAction(
    "[Clients] Start Client Remove",
    props<{ payload: Client }>()
);

export const SuccessClientRemove = createAction(
    "[Clients] Success Client Remove",
    props<{ client: Client }>()
);

export const FailureClients = createAction(
    "[Clients] Failure Clients",
    props<{ error: any }>()
);
