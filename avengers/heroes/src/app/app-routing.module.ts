import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/componetes/home/home.component';

import { HeroesComponent } from './components/componetes/heroes/heroes.component';
import { HistoriaComponent } from './components/componetes/historia/historia.component';
import { NosotrosComponent } from './components/componetes/nosotros/nosotros.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'heroes', component: HomeComponent },
  {path: 'historia', component: HomeComponent },
  {path: 'nosotros', component: HomeComponent },
  {path: '**', pathMatch: 'full',redirectTo:'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
