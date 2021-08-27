import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { PaginaInicialComponent } from './templates/pagina-inicial/pagina-inicial.component';
import { FooterComponent } from './templates/footer/footer.component';
import { LaudosComponent } from './templates/laudos/laudos.component';
import { InstalaBaixaComponent } from './templates/instala-baixa/instala-baixa.component';
import { SobreNosComponent } from './templates/sobre-nos/sobre-nos.component';
import { FaleConoscoComponent } from './templates/fale-conosco/fale-conosco.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    FooterComponent,
    LaudosComponent,
    InstalaBaixaComponent,
    SobreNosComponent,
    FaleConoscoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
