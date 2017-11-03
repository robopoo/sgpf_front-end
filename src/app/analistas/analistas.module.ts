import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { AnalistasComponent } from './analistas.component';
import { AnalistasService } from './shared/analista.service';
import { AnalistaFormComponent } from './analista-form/analista-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    AnalistasComponent,
    AnalistaFormComponent
  ],
  exports: [
    AnalistasComponent
  ],
  providers: [
   AnalistasService
  ]
})
export class AnalistasModule { }
