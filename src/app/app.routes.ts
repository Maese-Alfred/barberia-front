import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BarberosComponent } from './pages/barberos/barberos.component';
import { GestionFinancieraComponent } from './pages/gestion-financiera/gestion-financiera.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { VentasComponent } from './pages/ventas/ventas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'barberos', component: BarberosComponent },
  { path: 'gestion-financiera', component: GestionFinancieraComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'ventas', component: VentasComponent }
];
