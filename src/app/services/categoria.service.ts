import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ResponseQuery from '../models/responses/ResponseQuery';
import Categoria from '../models/Categoria';
import HttpConfig from './httpConfig';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  buscarCategorias(): Observable<ResponseQuery<Categoria>> {
    const url = `${HttpConfig.url}/categoria`;
    return this.http.get<ResponseQuery<Categoria>>(url,{headers: HttpConfig.getHeader()});
  }
}
