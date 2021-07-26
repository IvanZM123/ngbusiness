import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import * as actions from "./categories.actions";

import { Notifier } from "../../helpers/Notifier.helper";

import { CategoryService } from "../../services/category.service";

@Injectable()
export class CategoriesEffects {
    list$ = createEffect(() => this.actions$.pipe(
        ofType(actions.StartCategoryList),
        mergeMap(() => this.categoryService.list().pipe(
            map(categories => actions.SuccessCategoryList({ categories })),
            catchError(error => {
                this.notifier.notification({
                    icon: "bx bxs-error",
                    status: "danger",
                    text: error?.message
                });
                return of(actions.FailureCategories({ error }));
            })
        ))
    ));

    constructor(
        private actions$: Actions,
        private categoryService: CategoryService,
        private notifier: Notifier
    ) {}
}
