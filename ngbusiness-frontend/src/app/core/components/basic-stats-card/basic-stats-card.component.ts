import { Component, Input } from '@angular/core';

export interface BasicStat {
  title: string;
  quantity: number;
  icon: string;
  color: string;
}

@Component({
  selector: 'basic-stats-card',
  templateUrl: './basic-stats-card.component.html',
  styleUrls: ['./basic-stats-card.component.scss']
})
export class BasicStatsCardComponent {
  @Input() item!: BasicStat;
}
