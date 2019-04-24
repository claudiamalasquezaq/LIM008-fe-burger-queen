import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDoubleComponent } from './burger-double.component';

describe('BurgerDoubleComponent', () => {
  let component: BurgerDoubleComponent;
  let fixture: ComponentFixture<BurgerDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerDoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
