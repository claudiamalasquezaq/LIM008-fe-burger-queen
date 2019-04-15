import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreCliente: string = '';

  userToOrder(user: string) {
    console.log(user);
    this.nombreCliente = user;
  }
}
