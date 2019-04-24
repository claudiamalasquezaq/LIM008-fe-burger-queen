import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../components/order/order.component';
import { FirestoreService } from './firestore/firestore.service';

interface OrderList {
  fecha: Date;
  hora: string;
  products: Products[];
  total: number;
}


@Injectable({
  providedIn: 'root'
})


export class SendDataService {
  private productSource = new BehaviorSubject([]);
  currentProduct = this.productSource.asObservable();

  private total = new BehaviorSubject(0);
  currentTotal = this.total.asObservable();


  arrOrder = [];

  constructor(
    private firestore: FirestoreService
  ) { }

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
        } as Products;
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

  getOrderMade(obj) {
    this.firestore.sendOrderToFirebase(obj);
  }
}
