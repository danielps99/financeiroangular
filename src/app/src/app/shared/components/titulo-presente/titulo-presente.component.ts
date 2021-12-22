import { Component, Input, OnInit } from '@angular/core';
import OperacaoTitulo from 'src/app/models/enum/OperacaoTitulo';
import Titulo from 'src/app//models/Titulo';
import Conta from 'src/app/models/Conta';
import { TituloService } from 'src/app/services/titulo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-titulo-presente',
  templateUrl: './titulo-presente.component.html',
  styleUrls: ['./titulo-presente.component.scss'],
})
export class TituloPresenteComponent implements OnInit{
  @Input() operacao: OperacaoTitulo = OperacaoTitulo.INICIAL;
  titulo: Titulo = new Titulo(this.operacao);
  conta: Conta | null = null;
  subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tituloService: TituloService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({id}: Params) => {
      if (id) {
        this.tituloService.buscarTitulo(id).subscribe((e) => {
          this.titulo = e;
        });
      } else {
        this.titulo = new Titulo(this.operacao);
      }
    });
  }

  efetivar() {
    console.log(' efetivar', this.titulo);
  }

  agendar() {
    console.log(' agendar', this.titulo);
  }
}
