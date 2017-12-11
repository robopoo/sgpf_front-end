import { Component, OnInit } from '@angular/core';
import {ProjetosService} from "./shared/projeto.service";
import {Projeto} from "./shared/projeto";

import { SistemasService } from './../sistemas/shared/sistema.service';
import { Sistema } from 'app/sistemas/shared/sistema';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  private projetos: Projeto[] = [];
  private sistema: Sistema;

  constructor(private projetosService: ProjetosService, private sistemasService: SistemasService) { }

  ngOnInit() {
    this.projetosService.getProjetos()
      .subscribe(data => this.projetos = data);      
  }

  deleteProjeto(projeto){
    if (confirm("Tem certeza que deseja deletar: " + projeto.titulo + "?")) {
      var index = this.projetos.indexOf(projeto);
      this.projetos.splice(index, 1);

      this.projetosService.deleteProjeto(projeto.id)
        .subscribe(null,
          err => {
            alert("Não foi possível deletar o projeto");
            // Revert the view back to its original state
            this.projetos.splice(index, 0, projeto);
          });


    }
  }

  buscaSiglaSistema(id){
    this.sistemasService.getSistema(id).subscribe(data => this.sistema = data)
    return this.sistema.sigla; 
  }

  finalizeProjeto(projeto){
    if (confirm("Tem certeza que deseja finalizar o projeto: " + projeto.titulo + "?")) {
      var index = this.projetos.indexOf(projeto);
      //this.projetos.splice(index, 1);

      this.projetosService.finalizeProjeto(projeto.id)
        .subscribe(null,
          err => {
            alert("Não foi possível finalizar o projeto");
            // Revert the view back to its original state
            //this.projetos.splice(index, 0, projeto);
          });

          
    }
  }

}