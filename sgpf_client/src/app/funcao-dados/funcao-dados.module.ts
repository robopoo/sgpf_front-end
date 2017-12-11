import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { FuncaoDadosComponent } from './funcao-dados.component';
import { FuncaoDadosService } from './shared/funcao-dados.service';
import { FuncaoDadosFormComponent } from './funcao-dados-form/funcao-dados-form.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    FuncaoDadosComponent,
    FuncaoDadosFormComponent
  ],
  exports: [
   FuncaoDadosComponent
  ],
  providers: [
   FuncaoDadosService
  ]
})
export class FuncaoDadosModule { }