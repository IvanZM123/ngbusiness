import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/ngrx-store/store";

import { StartClientList } from 'src/app/core/ngrx-store/clients/clients.actions';

import { getListClients } from 'src/app/core/ngrx-store/clients/clients.selectors';

import { Client } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.scss']
})
export class ClientListPageComponent implements OnInit {
  clients!: Observable<Array<Client>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.clients = this.store.select(getListClients);
    this.store.dispatch(StartClientList());
  }
}
