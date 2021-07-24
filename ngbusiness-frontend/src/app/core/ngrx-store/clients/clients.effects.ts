import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./clients.actions";

import { ClientService } from "../../services/client.service";

@Injectable()
export class ClientsEffects {
    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartClientList),
        mergeMap(() => this.clientService.list().pipe(
            map(clients => actions.SuccessClientList({ clients })),
            catchError(error => of(actions.FailureClients({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private clientService: ClientService
    ) {}
}
