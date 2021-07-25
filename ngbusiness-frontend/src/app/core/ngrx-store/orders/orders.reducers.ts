import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, Action, on } from "@ngrx/store";

import * as actions from "./orders.actions";

import { Order } from "../../services/order.service";

export interface OrderState extends EntityState<Order> {
    error: any;
}

export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialOrderState: OrderState = orderAdapter.getInitialState({
    error: null
});

const _orderReducer = createReducer(initialOrderState,
    on(actions.SuccessOrderList, (state, { orders }) =>
        orderAdapter.addMany(orders, { ...state, error: null })
    ),

    on(actions.FailureOrders, (state, { error }) => ({ ...state, error }))
);

export function orderReducer(state = initialOrderState, action: Action) {
    return _orderReducer(state, action);
}
