import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// class orderList {
//   fecha: Date;
//   products: Array<object>;
//   total: number;
// };

export class SendDataService {
  private productSource = new BehaviorSubject([]);
  currentProduct = this.productSource.asObservable();

  arrOrder = [];

  constructor() { }

  addOrder(value) {
    const copyArr = this.arrOrder.map(product => product);
    copyArr.push(value);
    this.arrOrder = copyArr;
    this.updateOrder(this.arrOrder);
  }

  deleteProduct(arrOrder, id) {
    const newArr = arrOrder.filter((elem) => {
      return (elem.id !== id);
    });
    this.arrOrder = newArr;
    this.updateOrder(this.arrOrder);
  }

  updateOrder(value) {
    this.productSource.next(value);
    console.log(value);
  }
}
