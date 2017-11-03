import { Component, OnInit } from '@angular/core';
import {SistemasService} from "./shared/sistema.service";
import {Sistema} from "./shared/sistema";

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})
export class SistemasComponent implements OnInit {

  private sistemas: Sistema[] = [];

  constructor(private sistemasService: SistemasService) { }

  ngOnInit() {
    this.sistemasService.getSistemas()
      .subscribe(data => this.sistemas = data);
  }

  deleteSistema(sistema){
    if (confirm("Tem certeza que deseja deletar: " + sistema.name + "?")) {
      var index = this.sistemas.indexOf(sistema);
      this.sistemas.splice(index, 1);

      this.sistemasService.deleteSistema(sistema.id)
        .subscribe(null,
          err => {
            alert("Não foi possível deletar o sistema");
            // Revert the view back to its original state
            this.sistemas.splice(index, 0, sistema);
          });
    }
  }

}
