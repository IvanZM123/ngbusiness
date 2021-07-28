import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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
        return this.http.get<Array<Client>>(this.url);
    }

    create(data: Omit<Client, "id">): Observable<Client> {
        return this.http.post<Client>(this.url, data);
    }

    remove(id: string | number): Observable<Client> {
        const url: string = `${ this.url }/${ id }`;
        return this.http.delete<Client>(url);
    }
}
