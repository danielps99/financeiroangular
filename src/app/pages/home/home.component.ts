import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TituloService } from 'src/app/shared/services/titulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulos$! :Observable<any[]>;

  constructor(private tituloService: TituloService) { }

  ngOnInit(): void {
    this.titulos$ = this.tituloService.buscarTitulos(1);
    this.tituloService.buscarTitulos(1).subscribe((e) => console.log(e));
  }

}
