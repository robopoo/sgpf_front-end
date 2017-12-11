import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjetosService {

  private url: string = "https://my-json-server.typicode.com/thiagoblaraujo/Baphometricas/projetos";

  constructor(private http: Http) { }

  getProjetos(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getProjeto(id){
    return this.http.get(this.getProjetoUrl(id))
      .map(res => res.json());
  }

  addProjeto(projeto){
    return this.http.post(this.url, JSON.stringify(projeto))
      .map(res => res.json());
  }

  updateProjeto(projeto){
    return this.http.put(this.getProjetoUrl(projeto.id), JSON.stringify(projeto))
      .map(res => res.json());
  }

  deleteProjeto(id){
    return this.http.delete(this.getProjetoUrl(id))
      .map(res => res.json());
  }

  private getProjetoUrl(id){
    return this.url + "/" + id;
  }
  
  private getProjetoUrlFinalizacao(id){
    return this.url + "/finalize/" + id;
  }

  finalizeProjeto(projeto){
    return this.http.put(this.getProjetoUrlFinalizacao(projeto.id), JSON.stringify(projeto))
    .map(res => res.json());
  }

}
