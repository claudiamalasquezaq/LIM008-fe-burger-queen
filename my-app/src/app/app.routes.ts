import { Routes, RouterModule } from '@angular/router';

import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { AdditionalComponent } from './components/additional/additional.component';



const routes: Routes = [
    { path: 'desayuno', component: BreakfastComponent },
    { path: 'otro-menu', component: RemainderComponent },
    { path: 'adicionales', component: AdditionalComponent},
    { path: '**', component: BreakfastComponent }
];

export const APP_ROUTING = RouterModule.forRoot(routes);