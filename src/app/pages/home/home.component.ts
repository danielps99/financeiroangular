import { Component, HostListener, OnInit } from '@angular/core';
import OperacaoTitulo from 'src/app/models/enum/OperacaoTitulo';
import { TituloService } from 'src/app/services/titulo.service';
import Titulo from '../../models/Titulo';
import { isBottomOfWindow } from '../../shared/UtilWindow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  titulos: Titulo[] = [];
  titulosTotal: number = 0;

  constructor(private tituloService: TituloService) {}

  ngOnInit(): void {
    this.carregarTitulos();
  }

  private carregarTitulos() {
    this.tituloService.carregarTitulosPaginados().subscribe(
      (r) => {
        this.titulos = r.data;
        this.titulosTotal = r.total;
      }
    );
  }


  public obterUrlEdicao(titulo: Titulo) {
    return `/${titulo.operacao.toLowerCase()}/${titulo.id}`;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (isBottomOfWindow(window)) {
      this.carregarTitulos();
    }
  }
}
