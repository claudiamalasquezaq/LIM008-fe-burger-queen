import { Component, OnInit, Input } from '@angular/core';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})


export class OrderComponent implements OnInit {
  @Input() userName: string;

  // interface Order {
  //   id: String,
  //   item: String,
  //   precio: Number
  // }

  order: object[];

  deleteProduct(arr, id) {
    this.dataService.deleteProduct(arr, id);
  }

  addQuantityProduct(arr, id, precio) {
    arr.filter((elem) => {
      if (elem.id === id) {
        elem.count = 1;
        elem.total = precio * elem.count;
      }
      // return arr;
      console.log(arr);
    });
  }

  constructor(
    private dataService: SendDataService
  ) {
    this.dataService.currentProduct.subscribe(prod => {
      this.order = prod;
      console.log(prod);
    });
   }

  ngOnInit() {
  }


}
