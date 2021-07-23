import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

import { environment } from "src/environments/environment";

export interface Product {
    id: string;
    title: string;
    description: string;
    categories: Array<string>;
    picture: string;
}

@Injectable({
    providedIn: "root"
})
export class ProductService {
    private url: string = `${ environment.URI }/articles`;

    constructor(private http: HttpClient) {}

    list(): Observable<Array<Product>> {
        return from(this.http.get<Array<Product>>(this.url));
    }
}
