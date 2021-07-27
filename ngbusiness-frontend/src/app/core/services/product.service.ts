import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

export interface Product {
    id: string;
    title: string;
    description: string;
    categories: Array<string>;
    picture: string;
    price: number;
}

@Injectable({
    providedIn: "root"
})
export class ProductService {
    private url: string = `${ environment.URI }/articles`;

    constructor(private http: HttpClient) {}

    list(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(this.url);
    }

    create(product: Omit<Product, "id">): Observable<Product> {
        return this.http.post<Product>(this.url, product);
    }
}
