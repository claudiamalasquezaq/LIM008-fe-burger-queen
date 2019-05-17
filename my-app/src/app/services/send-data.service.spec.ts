import { TestBed } from '@angular/core/testing';
import { SendDataService } from './send-data.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

const input: object[] = [
  {
    id: '',
    item: '',
    precio: 0
  }
];

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(input)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

describe('SendDataService', () => {
  let service: SendDataService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SendDataService,
        {
          provide: AngularFirestore,
          useValue: angularFirestoreStub
        }
      ]
    });
    service = TestBed.get(SendDataService);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('SendDataService should be created', () => {
    expect(service).toBeTruthy();
  });
});
