import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from 'app/projetos/projetos.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';



const projetosRoutes: Routes = [
  { path: 'projetos', component: ProjetosComponent, pathMatch: 'full' },
  { path: 'projetos/new', component: ProjetoFormComponent},
  { path: 'projetos/:id', component: ProjetoFormComponent}
];

export const projetosRouting = RouterModule.forChild(projetosRoutes);