import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { BurgerSimpleComponent } from './components/burger-simple/burger-simple.component';
import { BurgerDoubleComponent } from './components/burger-double/burger-double.component';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [BreakfastComponent, RemainderComponent, BurgerSimpleComponent, BurgerDoubleComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  // it('fakeAsync works', fakeAsync(() => {
  //   const promise = new Promise(resolve => {
  //     setTimeout(resolve, 10);
  //   });
  //   let done = false;
  //   promise.then(() => (done = true));
  //   tick(50);
  //   expect(done).toBeTruthy();
  // }));

  // it('navigate to "" redirects you to /breakfast', fakeAsync(() => {
  //   router.navigate(['']).then(() => {
  //     expect(location.path()).toBe('/breakfast');
  //   });
  // }));

  // it('navigate to "remainder" takes you to /remainder', fakeAsync(() => {
  //   router.navigate(['remainder']).then(() => {
  //     expect(location.path()).toBe('/remainder');
  //   });
  // }));
});
