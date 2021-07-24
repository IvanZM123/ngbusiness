import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { of } from "rxjs";

import * as actions from "./clients.actions";

import { Notifier } from "../../helpers/Notifier.helper";

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

    create$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartClientCreate),
        mergeMap(({ payload }) => this.clientService.create(payload).pipe(
            map(client => actions.SuccessClientCreate({ client })),
            tap(() => this.router.navigate(["/clients"])),
            tap(({ client }) => this.notifier.notification({
                icon: "check_circle",
                text: `Se agrego ${ client.fullname } a la lista de clientes`,
                status: "success"
            })),
            catchError(error => of(actions.FailureClients({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private clientService: ClientService,
        private notifier: Notifier,
        private router: Router
    ) {}
}
