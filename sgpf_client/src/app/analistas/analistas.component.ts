import { Component, OnInit } from '@angular/core';
import {AnalistasService} from "./shared/analista.service";
import {Analista} from "./shared/analista";

@Component({
  selector: 'app-analistas',
  templateUrl: './analistas.component.html',
  styleUrls: ['./analistas.component.css']
})
export class AnalistasComponent implements OnInit {

  private analistas: Analista[] = [];

  constructor(private analistasService: AnalistasService) { }

  ngOnInit() {
    this.analistasService.getAnalistas()
      .subscribe(data => this.analistas = data);
  }

  deleteAnalista(analista){
    if (confirm("Tem certeza que deseja deletar: " + analista.name + "?")) {
      var index = this.analistas.indexOf(analista);
      this.analistas.splice(index, 1);

      this.analistasService.deleteAnalista(analista.id)
        .subscribe(null,
          err => {
            alert("Não foi possível deletar o analista!");
            // Revert the view back to its original state
            this.analistas.splice(index, 0, analista);
          });
    }
  }

}
