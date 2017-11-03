import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmpresasService {

  private url: string = "http://localhost:8080/sgpf/empresas";

  constructor(private http: Http) { }

  getEmpresas(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getEmpresa(id){
    return this.http.get(this.getEmpresaUrl(id))
      .map(res => res.json());
  }

  addEmpresa(empresa){
    return this.http.post(this.url, JSON.stringify(empresa))
      .map(res => res.json());
  }

  updateEmpresa(empresa){
    return this.http.put(this.getEmpresaUrl(empresa.id), JSON.stringify(empresa))
      .map(res => res.json());
  }

  deleteEmpresa(id){
    return this.http.delete(this.getEmpresaUrl(id))
      .map(res => res.json());
  }

  private getEmpresaUrl(id){
    return this.url + "/" + id;
  }
}
