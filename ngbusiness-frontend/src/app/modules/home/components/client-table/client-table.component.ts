import { Component, Input } from '@angular/core';

import { User } from 'src/app/core/mock/users.mock';

import { parseDate } from 'src/app/core/helpers/parseDate.helper';

@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent {
  @Input() clients!: Array<User>;

  parseDate(date: Date): string {
    return parseDate(date);
  }
}
