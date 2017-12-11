import { FuncaoDadosFormComponent } from './funcao-dados-form/funcao-dados-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FuncaoDadosComponent } from 'app/funcao-dados/funcao-dados.component';



const funcaoDadosRoutes: Routes = [
  { path: 'funcaoDados', component: FuncaoDadosComponent, pathMatch: 'full' },
  { path: 'funcaoDados/new', component: FuncaoDadosFormComponent},
  { path: 'funcaoDados/:id', component: FuncaoDadosFormComponent}
];

export const funcaoDadosRouting = RouterModule.forChild(funcaoDadosRoutes);