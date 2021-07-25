import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./orders.actions";

import { OrderService } from "../../services/order.service";

@Injectable()
export class OrdersEffects {
    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartOrderList),
        mergeMap(() => this.orderService.list().pipe(
            map(orders => actions.SuccessOrderList({ orders })),
            catchError(error => of(actions.FailureOrders({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private orderService: OrderService
    ) {}
}
