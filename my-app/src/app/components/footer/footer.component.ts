import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Otra forma: anio = new Date().getFullYear();
  anio: number;
  name: string;
  constructor() {
    this.anio = new Date().getFullYear();
    this.name = 'Claudia Malásquez Aquino';
  }
}
