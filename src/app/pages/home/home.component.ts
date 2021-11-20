import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ResponseQuery from 'src/app/models/responses/ResponseQuery';
import { TituloService } from 'src/app/services/titulo.service';
import Titulo from '../../models/Titulo'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulos!: Titulo[];

  constructor(private tituloService: TituloService) { }

  ngOnInit(): void {
    this.tituloService.buscarTitulos(1).subscribe(
      (r) => this.titulos = r.data      
    );
  }
}
