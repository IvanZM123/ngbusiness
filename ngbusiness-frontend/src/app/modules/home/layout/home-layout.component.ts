import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
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
