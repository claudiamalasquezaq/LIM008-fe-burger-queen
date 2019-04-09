import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  public breakfastMenu = [];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  getValueButton(value) {
    console.log(value);
    // return value;
  }

  ngOnInit() {
    this.firestoreService.getBreakfast()
    .subscribe((breakfastSnapshot) => {
      this.breakfastMenu = this.breakfastMenu.concat(breakfastSnapshot);
      return this.breakfastMenu;
    });
  }

}
