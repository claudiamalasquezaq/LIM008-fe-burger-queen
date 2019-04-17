import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-burger-double',
  templateUrl: './burger-double.component.html',
  styleUrls: ['./burger-double.component.css']
})
export class BurgerDoubleComponent implements OnInit {

  public burgerDouble = [];
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
    this.firestoreService.getBurgerDouble()
    .subscribe((burgerSnapshot) => {
      this.burgerDouble = this.burgerDouble.concat(burgerSnapshot);
      return this.burgerDouble;
    });
  }

}
