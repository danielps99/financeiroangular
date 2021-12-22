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

  buscarTitulo(id: string): Observable<Titulo> {
    const tit: Titulo | undefined = this.titulos$.value.data.find((e: Titulo) => e.id === id);
    if(tit) {
      return new BehaviorSubject(tit);
    }

    const url = `${HttpConfig.url}/titulo/${id}`;
    const tituloObs: Observable<Titulo> = this.http.get<Titulo>(url, {headers: HttpConfig.getHeader()});
    tituloObs.subscribe((t: Titulo) => {
      this.titulos$.value.data.push(t);
      this.titulos$.value.total++;
      this.titulos$.next(this.titulos$.value);
    });

    return tituloObs;
  }

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
