import { Component, OnInit } from '@angular/core';

import { Store as NgrxStore } from "@ngrx/store";
import { Observable } from 'rxjs';
import { StartClientList } from 'src/app/core/ngrx-store/clients/clients.actions';
import { getClientList } from 'src/app/core/ngrx-store/clients/clients.selectors';
import { Store } from 'src/app/core/ngrx-store/store';
import { Client } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  clients!: Observable<Array<Client>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.clients = this.store.select(getClientList(5));
    this.store.dispatch(StartClientList());
  }
}
