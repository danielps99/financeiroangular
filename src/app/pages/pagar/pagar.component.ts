import { Component, Input, OnInit } from '@angular/core';
import OperacaoTitulo from 'src/app/models/enum/OperacaoTitulo';
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.scss']
})
export class PagarComponent {

  operacao = OperacaoTitulo.PAGAR;

}
