import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaleConoscoComponent } from './templates/fale-conosco/fale-conosco.component';
import { InstalaBaixaComponent } from './templates/instala-baixa/instala-baixa.component';
import { LaudosComponent } from './templates/laudos/laudos.component';
import { PaginaInicialComponent } from './templates/pagina-inicial/pagina-inicial.component';
import { SobreNosComponent } from './templates/sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent},
  { path: 'Fale-Conosco', component:FaleConoscoComponent},
  { path: 'Sobre-Nos', component: SobreNosComponent},
  { path: 'Laudos', component: LaudosComponent},
  { path: 'Instalações', component: InstalaBaixaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
