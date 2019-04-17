import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface OrderList {
  id: string;
  item: string;
  precio: number;
  quantity: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})

// interface orderList {
//   fecha: Date;
//   products: Array<object>;
//   total: number;
// };

export class SendDataService {
  private productSource = new BehaviorSubject([]);
  currentProduct = this.productSource.asObservable();

  private total = new BehaviorSubject(0);
  currentTotal = this.total.asObservable();

  arrOrder = [];

  constructor() { }

  addOrder(value) {
    const copyArr = this.arrOrder.map(product => product);
    copyArr.push(value);
    this.arrOrder = copyArr;
    this.updateOrder();
    this.calculateTotal(this.arrOrder);
  }

  deleteProduct(arrOrder, id) {
    const newArr = arrOrder.filter((elem) => {
      return (elem.id !== id);
    });
    this.arrOrder = newArr;
    this.updateOrder();
    this.calculateTotal(this.arrOrder);
  }

  addQuantityProduct(item: string, precio: number, cantidad: number) {
    this.arrOrder = this.arrOrder.map(product => {
      if (product.item === item) {
        return {
          ...product,
          quantity: cantidad,
          total: cantidad * precio
        } as OrderList;
      } else {
        return product;
      }
    });
    this.updateOrder();
    this.calculateTotal(this.arrOrder);
  }

  updateOrder() {
    this.productSource.next(this.arrOrder);
    console.log(this.arrOrder);
  }

  calculateTotal(arr) {
    const sumaTotal = arr.reduce((sum, elem) => sum + elem.total, 0);
    this.total.next(sumaTotal);
  }
}
