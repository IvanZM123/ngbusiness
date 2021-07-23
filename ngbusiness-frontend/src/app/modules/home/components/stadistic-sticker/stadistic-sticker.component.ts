import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stadistic-sticker',
  templateUrl: './stadistic-sticker.component.html',
  styleUrls: ['./stadistic-sticker.component.scss']
})
export class StadisticStickerComponent {
  @Input() sticker!: Record<string, any>;
}
