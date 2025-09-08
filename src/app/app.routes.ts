import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BarberosComponent } from './pages/barberos/barberos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'barberos', component: BarberosComponent }
];
