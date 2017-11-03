import { Routes, RouterModule } from '@angular/router';

import { AnalistasComponent } from 'app/analistas/analistas.component';
import { AnalistaFormComponent } from 'app/analistas/analista-form/analista-form.component';

const analistasRoutes: Routes = [
  { path: 'analistas', component: AnalistasComponent, pathMatch: 'full' },
  { path: 'analistas/new', component: AnalistaFormComponent},
  { path: 'analistas/:id', component: AnalistaFormComponent}
];

export const analistasRouting = RouterModule.forChild(analistasRoutes);
