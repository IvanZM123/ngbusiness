import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

import { environment } from "src/environments/environment";

export interface Category {
    id: string;
    name: string;
}

@Injectable({
    providedIn: "root"
})
export class CategoryService {
    private readonly url: string = `${ environment.URI }/categories`;

    constructor(private http: HttpClient) {}

    list(): Observable<Array<Category>> {
        return from(this.http.get<Array<Category>>(this.url));
    }
}
