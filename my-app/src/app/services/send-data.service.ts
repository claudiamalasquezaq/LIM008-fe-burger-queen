import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private productSource = new BehaviorSubject([]);
  currentProduct = this.productSource.asObservable();
  // orderList = {
  //   fecha: Date,
  //   products: Array,
  //   total: Number
  // };
  arrOrder = [];

  constructor() { }

  addOrder(value) {
    // console.log(this.arrOrder);
    const copyArr = this.arrOrder.map(product => product);
    console.log(copyArr);
    copyArr.push(value);
    this.updateOrder(copyArr);
    this.arrOrder = copyArr;
    console.log(copyArr);
  }

  deleteOrder(value) {

  }

  updateOrder(value) {
    this.productSource.next(value);
    console.log(value);
  }
}
