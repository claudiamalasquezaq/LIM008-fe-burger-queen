import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastComponent } from './breakfast.component';

import { angularFirestoreStub } from '../../services/firestore/firestore.service.spec';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';


describe('BreakfastComponent', () => {
  let component: BreakfastComponent;
  let fixture: ComponentFixture<BreakfastComponent>;
  let angularFirestore: AngularFirestore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastComponent ],
      providers: [
        FirestoreService,
        {
          provide: AngularFirestore,
          useValue: angularFirestoreStub
        }
      ]
    })
    .compileComponents();
    component = TestBed.get(FirestoreService);
    angularFirestore = TestBed.get(AngularFirestore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the breakfast component', () => {
    expect(component).toBeTruthy();
  });
});
