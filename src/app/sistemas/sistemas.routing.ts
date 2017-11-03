import { SistemaFormComponent } from './sistema-form/sistema-form.component';
import { Routes, RouterModule } from '@angular/router';
import { SistemasComponent } from 'app/sistemas/sistemas.component';



const sistemasRoutes: Routes = [
  { path: 'sistemas', component: SistemasComponent, pathMatch: 'full' },
  { path: 'sistemas/new', component: SistemaFormComponent},
  { path: 'sistemas/:id', component: SistemaFormComponent}
];

export const sistemasRouting = RouterModule.forChild(sistemasRoutes);