import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css']
})
export class AdditionalComponent implements OnInit {

  public additionalItems = [];
  public burgersTaste = [];
  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.firestoreService.getAdditionalItems()
    .subscribe((additionalSnapshot) => {
      this.additionalItems = this.additionalItems.concat(additionalSnapshot);
      return this.additionalItems;
    });

    this.firestoreService.getBurgerTaste()
    .subscribe((burgerSnapshot) => {
      this.burgersTaste = this.burgersTaste.concat(burgerSnapshot);
      return this.burgersTaste;
    });
  }

}
