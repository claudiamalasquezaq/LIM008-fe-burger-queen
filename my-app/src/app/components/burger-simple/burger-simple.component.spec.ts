import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerSimpleComponent } from './burger-simple.component';

describe('BurgerSimpleComponent', () => {
  let component: BurgerSimpleComponent;
  let fixture: ComponentFixture<BurgerSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
