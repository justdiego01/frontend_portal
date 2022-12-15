import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  public listarCategoria() {
    return this.http.get(`${urlbase}/categoria/obtener`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }

  public agregarCategoria(categoria:any) {
    return this.http.post(`${urlbase}/categoria/agregar`, categoria, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
}