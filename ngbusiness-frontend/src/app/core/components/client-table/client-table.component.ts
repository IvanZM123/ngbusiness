import { Component, Input } from '@angular/core';

import { Client } from '../../services/client.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from '../../ngrx-store/store';
import { StartClientRemove } from '../../ngrx-store/clients/clients.actions';

@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  @Input() clients!: Array<Client> | null;

  constructor(private store: NgrxStore<Store>) {}

  remove(client: Client): void {
    if (confirm("¿Estas seguro que deseas eliminar al cliente?")) {
      this.store.dispatch(
        StartClientRemove({ payload: client })
      );
    }
  }
}
