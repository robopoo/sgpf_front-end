import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';


import { SistemasComponent } from './sistemas.component';
import { SistemasService } from './shared/sistema.service';
import { SistemaFormComponent} from './sistema-form/sistema-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
      SistemasComponent,
      SistemaFormComponent
  ],
  exports: [
   SistemasComponent
  ],
  providers: [
   SistemasService
  ]
})
export class SistemasModule { }