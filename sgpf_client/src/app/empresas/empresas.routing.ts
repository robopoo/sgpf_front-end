import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from 'app/empresas/empresas.component';



const empresasRoutes: Routes = [
  { path: 'empresas', component: EmpresasComponent, pathMatch: 'full' },
  { path: 'empresas/new', component: EmpresaFormComponent},
  { path: 'empresas/:id', component: EmpresaFormComponent}
];

export const empresasRouting = RouterModule.forChild(empresasRoutes);
