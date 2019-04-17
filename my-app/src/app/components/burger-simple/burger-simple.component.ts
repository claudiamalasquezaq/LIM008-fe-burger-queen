import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-burger-simple',
  templateUrl: './burger-simple.component.html',
  styleUrls: ['./burger-simple.component.css']
})
export class BurgerSimpleComponent implements OnInit {

  public burgerSimple = [];
  constructor(
    private firestoreService: FirestoreService,
    private sendDataService: SendDataService
  ) { }

  getAddProduct(product) {
    const copyArr = {
      ...product,
      quantity: 1,
      total: product.precio
    };
    this.sendDataService.addOrder(copyArr);
  }

  ngOnInit() {
    this.firestoreService.getBurgerSimple()
    .subscribe((burgerSnapshot) => {
      this.burgerSimple = this.burgerSimple.concat(burgerSnapshot);
      return this.burgerSimple;
    });
  }

}
