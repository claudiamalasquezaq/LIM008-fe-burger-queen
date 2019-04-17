import { Component, OnInit, Input } from '@angular/core';
import { SendDataService } from '../../services/send-data.service';


interface Products {
  id: string;
  item: string;
  precio: number;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})


export class OrderComponent implements OnInit {
  @Input() userName: string;

  cantTotal: number;
  order: Products[];

  deleteProduct(arr: Array<object>, id: string) {
    this.dataService.deleteProduct(arr, id);
  }

  changeQuantity(item: string, precio: number, cantidad: number) {
    this.dataService.addQuantityProduct(item, precio, cantidad);
  }

  constructor(
    private dataService: SendDataService
  ) {
    this.dataService.currentProduct.subscribe(prod => {
      this.order = prod;
    });

    this.dataService.currentTotal.subscribe(tot => {
      this.cantTotal = tot;
    });
   }

  ngOnInit() {
  }


}
