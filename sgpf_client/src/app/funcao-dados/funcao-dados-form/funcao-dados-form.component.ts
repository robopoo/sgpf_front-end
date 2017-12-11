import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { FuncaoDados } from '../shared/funcao-dados';
import { FuncaoDadosService } from '../shared/funcao-dados.service';
import { BasicValidators } from '../../shared/basic-validators';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-funcao-dados-form',
  templateUrl: './funcao-dados-form.component.html',
  styleUrls: ['./funcao-dados-form.component.css']
})
export class FuncaoDadosFormComponent implements OnInit {
  settings = {
    selectMode: 'multi',
    columns: {
      nome: {
        title: 'Tipo de Registro'
      }
    }
  };
  
  form: FormGroup;
  title: string;
  funcaoDados: FuncaoDados = new FuncaoDados();
  //empresas: Empresa[];

  constructor(
    FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private funcaoDadosService: FuncaoDadosService,
    //private empresasService: EmpresasService
  ) { 
      //this.empresasService.getEmpresas().subscribe(data => this.empresas = data);

      this.form = FormBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(4)
        ]],
      descricao: [],
    });

    
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar Função de Dados' : 'Nova Função de Dados';

      if (!id)
        return;

      this.funcaoDadosService.getFuncaoDados(id)
        .subscribe(
          funcaoDados => this.funcaoDados = funcaoDados,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });


  }

  save() {
    var result,
        funcaoDadosValue = this.form.value;

    if (funcaoDadosValue.id){
      result = this.funcaoDadosService.updateFuncaoDados(funcaoDadosValue);
    } else {
      result = this.funcaoDadosService.addFuncaoDados(funcaoDadosValue);
    }

    result.subscribe(data => this.router.navigate(['funcaoDados']));
  }
}
