import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { SendDataService } from '../../services/send-data.service';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.css']
})
export class RemainderComponent implements OnInit {

  public remainderMenu = [];
  constructor(
    private firestoreService: FirestoreService,
    private sendDataService: SendDataService
  ) { }

  getAddProduct(product) {
    this.sendDataService.addOrder(product);
  }
  ngOnInit() {
    this.firestoreService.getRemainder()
    .subscribe((remainderSnapshot) => {
      this.remainderMenu = this.remainderMenu.concat(remainderSnapshot);
      return this.remainderMenu;
    });
  }

}
