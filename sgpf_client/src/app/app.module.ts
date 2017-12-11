import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { analistasRouting } from "./analistas/analistas.routing";
import { AnalistasModule } from "./analistas/analistas.module";
import { empresasRouting } from "./empresas/empresas.routing";
import { EmpresasModule } from "./empresas/empresas.module";
import { sistemasRouting } from "./sistemas/sistemas.routing";
import { SistemasModule } from "./sistemas/sistemas.module";
import { projetosRouting } from "./projetos/projetos.routing";
import { ProjetosModule } from "./projetos/projetos.module";
import { funcaoDadosRouting } from "./funcao-dados/funcao-dados.routing";
import { FuncaoDadosModule } from "./funcao-dados/funcao-dados.module";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AnalistasModule,
    analistasRouting,
    EmpresasModule,
    empresasRouting,
    SistemasModule,
    sistemasRouting,
    ProjetosModule,
    projetosRouting,
    FuncaoDadosModule,
    funcaoDadosRouting,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
