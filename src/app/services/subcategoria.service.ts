import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ResponseQuery from '../models/responses/ResponseQuery';
import SubCategoria from '../models/Subcategoria';
import HttpConfig from './httpConfig';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(private http: HttpClient) { }

  buscarSubcategorias(): Observable<ResponseQuery<SubCategoria>> {
    const url = `${HttpConfig.url}/subcategoria`;
    return this.http.get<ResponseQuery<SubCategoria>>(url,{headers: HttpConfig.getHeader()});
  }
}
