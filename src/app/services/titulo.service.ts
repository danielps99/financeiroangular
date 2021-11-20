import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import HttpConfig from './httpConfig';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(  private http: HttpClient) {  }

  buscarTitulos(page: number): Observable<any[]> {
    const url = `${HttpConfig.url}/query/TitulosAgendadosDescricaoValorVencimentoOperacao/${page}`;
    return this.http.post<any[]>(url,{}, {headers: HttpConfig.getHeader()});
  }
}