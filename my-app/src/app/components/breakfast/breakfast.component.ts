import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {


  public breakfastMenu = [];

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
    this.firestoreService.getBreakfast()
    .subscribe((breakfastSnapshot) => {
      this.breakfastMenu = this.breakfastMenu.concat(breakfastSnapshot);
      return this.breakfastMenu;
    });


    // this.sendDataService.getProduct(this.breakfastMenu);
  }

}
