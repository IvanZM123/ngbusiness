import { Component, Input } from '@angular/core';

@Component({
  selector: 'general-sticker',
  templateUrl: './general-sticker.component.html',
  styleUrls: ['./general-sticker.component.scss']
})
export class GeneralStickerComponent {
  @Input() sticker!: Record<string, any>;
}
