import { Routes, RouterModule } from '@angular/router';

import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { BurgerSimpleComponent } from './components/burger-simple/burger-simple.component';
import { BurgerDoubleComponent } from './components/burger-double/burger-double.component';



export const routes: Routes = [
    { path: 'desayuno', component: BreakfastComponent },
    { path: 'otro-menu', component: RemainderComponent },
    { path: 'otro-menu/hamb-simple', component: BurgerSimpleComponent},
    { path: 'otro-menu/hamb-doble', component: BurgerDoubleComponent},
    { path: '**', component: BreakfastComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
