import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { EmpresasComponent } from './empresas.component';
import { EmpresasService } from './shared/empresa.service';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    EmpresasComponent,
    EmpresaFormComponent
  ],
  exports: [
   EmpresasComponent
  ],
  providers: [
   EmpresasService
  ]
})
export class EmpresasModule { }