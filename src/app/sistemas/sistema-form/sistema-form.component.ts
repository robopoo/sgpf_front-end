import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Sistema } from '../shared/sistema';
import { SistemasService } from '../shared/sistema.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-sistema-form',
  templateUrl: './sistema-form.component.html',
  styleUrls: ['./sistema-form.component.css']
})
export class SistemaFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  sistema: Sistema = new Sistema();
  constructor(
    FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private sistemaService: SistemasService
  ) { 
      this.form = FormBuilder.group({
      sigla: ['', [
       Validators.required,
       Validators.maxLength(5)
      ]],
      nome: ['', [
        Validators.required,
        Validators.minLength(10)
        ]],
      descricao: [],
    });

    
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar Sistema' : 'Novo Sistema';

      if (!id)
        return;

      this.sistemaService.getSistema(id)
        .subscribe(
          sistema => this.sistema = sistema,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });


  }

  save() {
    var result,
        sistemaValue = this.form.value;

    if (sistemaValue.id){
      result = this.sistemaService.updateSistema(sistemaValue);
    } else {
      result = this.sistemaService.addSistema(sistemaValue);
    }

    result.subscribe(data => this.router.navigate(['sistemas']));
  }
}
