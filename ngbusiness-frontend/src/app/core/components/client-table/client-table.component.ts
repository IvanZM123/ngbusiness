import { Component, Input } from '@angular/core';

import { Client } from '../../services/client.service';

@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  @Input() clients!: Array<Client> | null;
}
