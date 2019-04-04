import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  year: number;
  month: number;
  day: number;

  hour: number;
  minutes: number;

  constructor() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth();
    this.day = new Date().getDay();
    this.hour = new Date().getHours();
    this.minutes = new Date().getMinutes();
  }

}
