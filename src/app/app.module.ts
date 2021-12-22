import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { PagarComponent } from './pages/pagar/pagar.component';
import { PagarParceladoComponent } from './pages/pagar-parcelado/pagar-parcelado.component';
import { ReceberComponent } from './pages/receber/receber.component';
import { ReceberParceladoComponent } from './pages/receber-parcelado/receber-parcelado.component';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { TituloPresenteComponent } from './src/app/shared/components/titulo-presente/titulo-presente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    PagarComponent,
    PagarParceladoComponent,
    ReceberComponent,
    ReceberParceladoComponent,
    ConfiguracaoComponent,
    TituloPresenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
