import { Component } from '@angular/core';

import { createUser, User } from 'src/app/core/mock/users.mock';
import { createListItems } from 'src/app/core/mock/general.mock';

import { parseDate } from 'src/app/core/helpers/parseDate.helper';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent {
  clients: Array<User> = createListItems(createUser, 25);

  parseDate(date: Date): string {
    return parseDate(date);
  }
}
