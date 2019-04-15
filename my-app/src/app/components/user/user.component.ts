import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() sendUser: EventEmitter<string>;

  sendNameUser(user: string) {
    this.sendUser.emit(user);
  }

  constructor() {
    this.sendUser = new EventEmitter();
   }

  ngOnInit() {
  }

}
