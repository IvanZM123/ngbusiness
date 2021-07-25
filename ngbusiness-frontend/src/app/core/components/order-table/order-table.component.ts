import { Component, Input } from '@angular/core';

import { Order, Status } from '../../services/order.service';

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent {
  @Input() orders!: Array<Order> | null;

  setColor(status: Status): string {
    const color: Record<Status, string> = {
      COMPLETE: "success",
      PROGRESS: "warning",
      PENDING: "danger"
    };
    return color[status];
  }
}
