import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SistemasService {

  private url: string = "http://localhost:8080/sgpf/sistemas";

  constructor(private http: Http) { }

  getSistemas(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getSistema(id){
    return this.http.get(this.getSistemaUrl(id))
      .map(res => res.json());
  }

  addSistema(sistema){
    return this.http.post(this.url, JSON.stringify(sistema))
      .map(res => res.json());
  }

  updateSistema(sistema){
    return this.http.put(this.getSistemaUrl(sistema.id), JSON.stringify(sistema))
      .map(res => res.json());
  }

  deleteSistema(id){
    return this.http.delete(this.getSistemaUrl(id))
      .map(res => res.json());
  }

  private getSistemaUrl(id){
    return this.url + "/" + id;
  }
}
