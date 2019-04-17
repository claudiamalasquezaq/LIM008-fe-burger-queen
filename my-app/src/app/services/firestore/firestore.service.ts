import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

// interface OrderList {
//   fecha: Date;
//   nameClient: string;
//   products: [
//     {
//       id: string,
//       item: string,
//       precio: number
//     }
//   ];
//   total: number;
// }

// interface Products {
//   id: string;
//   item: string;
//   precio: number;
// }

@Injectable({
  providedIn: 'root'
})


export class FirestoreService {

  constructor(
    private firedata: AngularFirestore
  ) { }

  // Obtiene el menú de Desayuno
  getBreakfast() {
    return this.firedata.collection('breakfast').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getRemainder() {
    return this.firedata.collection('remainder').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  getBurgerSimple() {
    return this.firedata.collection('burger-simple').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  getBurgerDouble() {
    return this.firedata.collection('burger-double').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

}
