import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import ResponseQuery from '../models/responses/ResponseQuery';
import Titulo from '../models/Titulo';
import HttpConfig from './httpConfig';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  titulos :ResponseQuery<Titulo> = new ResponseQuery<Titulo>();
  page :number = 0;

  titulos$ = new BehaviorSubject(new ResponseQuery<Titulo>());

  constructor(  private http: HttpClient) {  }

  buscarTitulos(page: number): Observable<ResponseQuery<Titulo>> {
    const url = `${HttpConfig.url}/query/TitulosAgendadosDescricaoValorVencimentoOperacao/${page}`;
    return this.http.post<ResponseQuery<Titulo>>(url,{}, {headers: HttpConfig.getHeader()});
  }

  carregarTitulosPaginados(): Observable<ResponseQuery<Titulo>> {
    this.page ++;
    this.buscarTitulos(this.page).subscribe(
      (r: ResponseQuery<Titulo>) => {
        const novo: ResponseQuery<Titulo> = this.titulos$.value;
        r.data.map((t: Titulo) => {
          novo.data.push(t);
          novo.total = r.total;
        });
        this.titulos$.next(novo);
      }
    );
    return this.titulos$
  }
}
