import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FuncaoDadosService {

  private url: string = "http://localhost:8080/sgpf/funcaoDados";

  constructor(private http: Http) { }

  getFuncoesDados(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getFuncaoDados(id){
    return this.http.get(this.getFuncaoDadosUrl(id))
      .map(res => res.json());
  }

  addFuncaoDados(funcaoDados){
    return this.http.post(this.url, JSON.stringify(funcaoDados))
      .map(res => res.json());
  }

  updateFuncaoDados(funcaoDados){
    return this.http.put(this.getFuncaoDadosUrl(funcaoDados.id), JSON.stringify(funcaoDados))
      .map(res => res.json());
  }

  deleteFuncaoDados(id){
    return this.http.delete(this.getFuncaoDadosUrl(id))
      .map(res => res.json());
  }

  private getFuncaoDadosUrl(id){
    return this.url + "/" + id;
  }
}
