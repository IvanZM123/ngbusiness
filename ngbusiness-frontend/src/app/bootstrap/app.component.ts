import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private nav: Element | null = null;
  private body: Element | null = null;
  private header: Element | null = null;

  constructor() {}

  ngOnInit(): void {
    this.header = document.getElementById("header");
    this.nav = document.getElementById("nav-bar");
    this.body = document.getElementById("body-pd");
  }

  toggle(): void {
    this.header?.classList.toggle("body-pd");
    this.nav?.classList.toggle("show");
    this.body?.classList.toggle("body-pd");
  }
}
