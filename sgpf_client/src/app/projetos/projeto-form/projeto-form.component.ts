import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Projeto } from '../shared/projeto';
import { ProjetosService } from '../shared/projeto.service';
import { BasicValidators } from '../../shared/basic-validators';
import { Analista } from 'app/analistas/shared/analista';
import { Sistema } from 'app/sistemas/shared/sistema';
import { Empresa } from 'app/empresas/shared/empresa';
import { SistemasService } from './../../sistemas/shared/sistema.service';
import { EmpresasService } from './../../empresas/shared/empresa.service';
import { AnalistasService } from './../../analistas/shared/analista.service';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  projeto: Projeto = new Projeto();
  analistas: Analista[];
  sistemas: Sistema[];
  empresas: Empresa[];
  
  constructor(
    FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private projetoService: ProjetosService,
    private analistasService: AnalistasService,
    private empresasServive: EmpresasService,
    private sistemasService: SistemasService
  ) { 
      this.empresasServive.getEmpresas().subscribe(data => this.empresas = data);
      this.sistemasService.getSistemas().subscribe(data => this.sistemas = data);
      this.analistasService.getAnalistas().subscribe(data => this.analistas = data);
    
      this.form = FormBuilder.group({
      idSistema: [],
      idEmpresa: [],
      idAnalista: [],
      identificador:[],
      titulo: [],
      descricao: [],
      tipo: [],
    });

    
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar Projeto' : 'Novo Projeto';

      if (!id)
        return;

      this.projetoService.getProjeto(id)
        .subscribe(
          projeto => this.projeto = projeto,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });


  }

  save() {
    var result,
        projetoValue = this.form.value;

    if (projetoValue.id){
      result = this.projetoService.updateProjeto(projetoValue);
    } else {
      result = this.projetoService.addProjeto(projetoValue);
    }

    result.subscribe(data => this.router.navigate(['projetos']));
  }
}
