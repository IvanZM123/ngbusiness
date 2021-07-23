import { Component, Input } from '@angular/core';

import { Order, Status } from 'src/app/core/mock/orders.mock';

import { parseDate } from 'src/app/core/helpers/parseDate.helper';

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent {
  @Input() orders!: Array<Order>;

  parseDate(date: Date): string {
    return parseDate(date);
  }

  status(status: string): string {
    const items: Record<string, string> = {
      [Status.Pending]: "danger",
      [Status.Progress]: "warning",
      [Status.Complete]: "success",
    };

    return items[status];
  }
}
