import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { PagarComponent } from './pages/pagar/pagar.component';
import { PagarParceladoComponent } from './pages/pagar-parcelado/pagar-parcelado.component';
import { ReceberComponent } from './pages/receber/receber.component';
import { ReceberParceladoComponent } from './pages/receber-parcelado/receber-parcelado.component';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pagar', component: PagarComponent},
  { path: 'pagar/:id', component: PagarComponent},
  { path: 'receber', component: ReceberComponent},
  { path: 'receber/:id', component: ReceberComponent},
  { path: 'pagar-parcelado', component: PagarParceladoComponent},
  { path: 'receber-parcelado', component: ReceberParceladoComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'configuracao', component: ConfiguracaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
