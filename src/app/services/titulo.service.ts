import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ResponseQuery from '../models/responses/ResponseQuery';
import Titulo from '../models/Titulo';
import HttpConfig from './httpConfig';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(  private http: HttpClient) {  }

  buscarTitulos(page: number): Observable<ResponseQuery<Titulo>> {
    const url = `${HttpConfig.url}/query/TitulosAgendadosDescricaoValorVencimentoOperacao/${page}`;
    return this.http.post<ResponseQuery<Titulo>>(url,{}, {headers: HttpConfig.getHeader()});
  }
}