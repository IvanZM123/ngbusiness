import { createFeatureSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";

import { orderAdapter, OrderState } from "./orders.reducers";
import { KeyStore } from "../store";

export const getStateOrders: MemoizedSelector<
    object,
    OrderState,
    DefaultProjectorFn<OrderState>
> = createFeatureSelector<OrderState>(KeyStore.OrderStore);

const { selectAll } = orderAdapter.getSelectors(getStateOrders);

export const getOrderList = selectAll;
