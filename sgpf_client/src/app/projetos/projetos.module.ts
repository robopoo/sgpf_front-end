import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ProjetosComponent } from './projetos.component';
import { ProjetosService } from './shared/projeto.service';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    ProjetosComponent,
    ProjetoFormComponent
  ],
  exports: [
   ProjetosComponent
  ],
  providers: [
   ProjetosService
  ]
})
export class ProjetosModule { }