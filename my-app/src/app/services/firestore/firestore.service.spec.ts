import { TestBed } from '@angular/core/testing';
import { FirestoreService } from './firestore.service';

import { AngularFirestore } from '@angular/fire/firestore';

export const input: object[] = [
  {id: 'p001', item: 'Café americano', precio: 5},
  {id: 'p002', item: 'Café con leche', precio: 7},
  {id: 'p003', item: 'Sandwich de jamón con queso', precio: 12}
];

export const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(input)
};

export const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('FirestoreService', () => {
  let service: FirestoreService;
  let angularFirestore: AngularFirestore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirestoreService,
        {
          provide: AngularFirestore,
          useValue: angularFirestoreStub
        }
      ]
    });
    service = TestBed.get(FirestoreService);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
    // expect(angularFirestoreStub.collection).toHaveBeenCalledWith('collectionSub');
  });
});
