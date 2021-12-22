import { Component } from '@angular/core';
import OperacaoTitulo from 'src/app/models/enum/OperacaoTitulo';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.component.html',
  styleUrls: ['./receber.component.scss']
})
export class ReceberComponent {

  operacao = OperacaoTitulo.RECEBER;

}
