import { Component, OnInit, Input } from '@angular/core';
import { SendDataService } from '../../services/send-data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})


export class OrderComponent implements OnInit {
  @Input() userName: string;

  order: object[];

  deleteProduct(arr, id) {
    console.log(arr);
    console.log(id);
    const newArr = [];
    arr.filter((elem) => {
      if (elem.id !== id) {
        newArr.push(elem);
      }
      return newArr;
    });
    console.log(newArr);
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
