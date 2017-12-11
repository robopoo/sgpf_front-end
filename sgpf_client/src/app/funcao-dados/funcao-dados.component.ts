import { SistemasService } from './../sistemas/shared/sistema.service';
import { EmpresasService } from './../empresas/shared/empresa.service';
import { Component, OnInit } from '@angular/core';
import {FuncaoDadosService} from "./shared/funcao-dados.service";
import {FuncaoDados} from "./shared/funcao-dados";
import { Projeto } from 'app/projetos/shared/projeto';
import { ProjetosService } from './../projetos/shared/projeto.service';
import { Empresa } from 'app/empresas/shared/empresa';
import { Sistema } from 'app/sistemas/shared/sistema';

@Component({
  selector: 'app-funcao-dados',
  templateUrl: './funcao-dados.component.html',
  styleUrls: ['./funcao-dados.component.css']
})
export class FuncaoDadosComponent implements OnInit {

  //private funcoesDados: FuncaoDados[] = [];
  private projetos : Projeto[] = [];
  private empresa : Empresa;
  private sistema : Sistema;
  constructor(private projetosService: ProjetosService, private empresasService: EmpresasService, private sistemaService: SistemasService) {
   
   }

  ngOnInit() {
    this.projetosService.getProjetos()
      .subscribe(data => this.projetos = data);
      
  }

  recuperaEmpresa(id)
  {
    
    this.empresasService.getEmpresa(id).subscribe(data => this.empresa = data);
    return this.empresa.nome;
  }

  recuperaSistema(id)
  {
    
    this.sistemaService.getSistema(id).subscribe(data => this.sistema = data);
    return this.sistema.sigla;
  }
}
