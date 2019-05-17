import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Router
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app.routes';

// Componentes
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { BurgerSimpleComponent } from './components/burger-simple/burger-simple.component';
import { BurgerDoubleComponent } from './components/burger-double/burger-double.component';
import { AppComponent } from './app.component';

// Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';


describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
      declarations: [AppComponent, BreakfastComponent, RemainderComponent, BurgerSimpleComponent, BurgerDoubleComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [ AngularFirestore ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "breakfast" redirects you to /breakfast', fakeAsync(() => {
    router.navigate(['breakfast']);
    tick();
    expect(location.path()).toBe('/breakfast');
  }));

  it('navigate to "remainder" takes you to /remainder', fakeAsync(() => {
    router.navigate(['remainder']);
    tick();
    expect(location.path()).toBe('/remainder');
  }));

  it('navigate to "otro-menu" takes you to /otro-menu', fakeAsync(() => {
    router.navigate(['otro-menu']);
    tick();
    expect(location.path()).toBe('/otro-menu');
  }));

  it('navigate to "otro-menu/hamb-simple" takes you to /otro-menu/hamb-simple', fakeAsync(() => {
    router.navigate(['otro-menu/hamb-simple']);
    tick();
    expect(location.path()).toBe('/otro-menu/hamb-simple');
  }));

  it('navigate to "otro-menu/hamb-doble" takes you to /otro-menu/hamb-doble', fakeAsync(() => {
    router.navigate(['otro-menu/hamb-doble']);
    tick();
    expect(location.path()).toBe('/otro-menu/hamb-doble');
  }));

  it('navigate to "" takes you to /desayuno', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/desayuno');
  }));

});
