import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ResponseQuery from '../models/responses/ResponseQuery';
import Conta from '../models/Conta';
import HttpConfig from './httpConfig';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  buscarContas(): Observable<ResponseQuery<Conta>> {
    const url = `${HttpConfig.url}/conta`;
    return this.http.get<ResponseQuery<Conta>>(url,{headers: HttpConfig.getHeader()});
  }
}
