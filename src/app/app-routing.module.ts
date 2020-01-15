import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { JapanseGrammarComponent } from './page/japanse-grammar/japanse-grammar.component';
import { PokemonComponent } from './page/pokemon/pokemon.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'japanse-grammar', component: JapanseGrammarComponent },
  { path: 'pokemon-game', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
