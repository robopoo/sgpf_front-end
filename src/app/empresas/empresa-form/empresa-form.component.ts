import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Empresa } from '../shared/empresa';
import { EmpresasService } from '../shared/empresa.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  empresa: Empresa = new Empresa();
  constructor(
    FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private empresaService: EmpresasService
  ) { 
      this.form = FormBuilder.group({
      name: ['', [
       Validators.required,
       Validators.minLength(3)
      ]],
      razaoSocial: ['', [
        Validators.required,
        Validators.minLength(10)
        ]],
      cnpj: [],
    });

    
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar Empresa' : 'Nova Empresa';

      if (!id)
        return;

      this.empresaService.getEmpresa(id)
        .subscribe(
          empresa => this.empresa = empresa,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });


  }

  save() {
    var result,
        empresaValue = this.form.value;

    if (empresaValue.id){
      result = this.empresaService.updateEmpresa(empresaValue);
    } else {
      result = this.empresaService.addEmpresa(empresaValue);
    }

    result.subscribe(data => this.router.navigate(['empresas']));
  }
}

