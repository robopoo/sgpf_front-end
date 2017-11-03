import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Analista } from '../shared/analista';
import { AnalistasService } from '../shared/analista.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-analista-form',
  templateUrl: './analista-form.component.html',
  styleUrls: ['./analista-form.component.css']
})
export class AnalistaFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  analista: Analista = new Analista();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private analistaService: AnalistasService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),
      ]],
      phone: [],
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Alterar Analista' : 'Novo Analista';

      if (!id)
        return;

      this.analistaService.getAnalista(id)
        .subscribe(
          analista => this.analista = analista,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        analistaValue = this.form.value;

    if (analistaValue.id){
      result = this.analistaService.updateAnalista(analistaValue);
    } else {
      result = this.analistaService.addAnalista(analistaValue);
    }

    result.subscribe(data => this.router.navigate(['analistas']));
  }
}
