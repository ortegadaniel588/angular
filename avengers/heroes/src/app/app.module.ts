import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/componentes/navbar/navbar.component';
import { HomeComponent } from './components/componetes/home/home.component';
import { HeroesComponent } from './components/componetes/heroes/heroes.component';
import { NosotrosComponent } from './components/componetes/nosotros/nosotros.component';
import { HistoriaComponent } from './components/componetes/historia/historia.component';
import { FooterComponent } from './components/componetes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    NosotrosComponent,
    HistoriaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
