import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { Client } from "./client.service";
import { Product } from "./product.service";

export enum Status {
    Progress = "PROGRESS",
    Complete = "COMPLETE",
    Pending  = "PENDING"
}

export interface Order {
    id: string;
    userId: string;
    articleId: string;
    date: string;
    users: Client;
    articles: Product;
    address: string;
    quantity: number;
    status: Status;
}

@Injectable({
    providedIn: "root"
})
export class OrderService {
    private readonly url: string = `${ environment.URI }/orders`;

    constructor(private http: HttpClient) {}

    list(): Observable<Array<Order>> {
        const url: string = `${ this.url }?_expand=users&_expand=articles`
        return from(this.http.get<Array<Order>>(url));
    }
}
