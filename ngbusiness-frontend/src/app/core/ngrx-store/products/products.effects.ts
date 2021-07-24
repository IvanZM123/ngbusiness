import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./product.actions";

import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";

@Injectable()
export class ProductEffects {
    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartProductList),
        mergeMap(() => this.productService.list().pipe(
            map(products => actions.SuccessProductList({ products })),
            catchError(error => of(actions.FailureProducts({ error })))
        ))
    ));

    create$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartProductCreate),
        mergeMap(({ payload }) => this.productService.create(payload).pipe(
            map(product => actions.SuccessProductCreate({ product })),
            tap(() => this.router.navigate(["/products"])),
            catchError(error => of(actions.FailureProducts({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private router: Router,
        private productService: ProductService
    ) {}
}