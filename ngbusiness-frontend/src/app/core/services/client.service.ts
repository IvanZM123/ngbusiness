import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

import { environment } from "src/environments/environment";

export interface Client {
    id: string;
    fullname: string;
    avatar: string;
    NIT: string;
    email: string;
    phone: number;
}

@Injectable({
    providedIn: "root"
})
export class ClientService {
    private url: string = `${ environment.URI }/users`;

    constructor(private http: HttpClient) {}

    list(): Observable<Array<Client>> {
        return from(this.http.get<Array<Client>>(this.url));
    }
}
