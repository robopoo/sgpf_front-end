import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AnalistasService {

  private url: string = "https://my-json-server.typicode.com/thiagoblaraujo/Baphometricas/analistas";

  constructor(private http: Http) { }

  getAnalistas(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getAnalista(id){
    return this.http.get(this.getAnalistaUrl(id))
      .map(res => res.json());
  }

  addAnalista(analista){
    return this.http.post(this.url, JSON.stringify(analista))
      .map(res => res.json());
  }

  updateAnalista(analista){
    return this.http.put(this.getAnalistaUrl(analista.id), JSON.stringify(analista))
      .map(res => res.json());
  }

  deleteAnalista(id){
    return this.http.delete(this.getAnalistaUrl(id))
      .map(res => res.json());
  }

  private getAnalistaUrl(id){
    return this.url + "/" + id;
  }
}
