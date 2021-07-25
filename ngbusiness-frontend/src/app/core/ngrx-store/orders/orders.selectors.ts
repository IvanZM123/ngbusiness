import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";

import { Order } from "../../services/order.service";
import { OrderState } from "./orders.reducers";
import { KeyStore } from "../store";

export const getStateOrders: MemoizedSelector<
    object,
    OrderState,
    DefaultProjectorFn<OrderState>
> = createFeatureSelector<OrderState>(KeyStore.OrderStore);

export const getOrderList = (max: number  | undefined = undefined) => createSelector(
    getStateOrders,
    ({ entities }) => {
        const orders: Array<Order> = Object.keys(entities).map(
            key => entities[key] as Order
        );
        return max ? orders.filter((_, index) => (index <= max)) : orders;
    }
);
