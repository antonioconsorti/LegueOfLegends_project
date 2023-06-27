import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoreComponent } from './pages/lore/lore.component';
import { PatchNoteComponent } from './pages/patch-note/patch-note.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChampionDetailComponent } from './pages/champions/champion-detail/champion-detail.component';
import { ChampionsListComponent } from './pages/champions/champions-list/champions-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lore', component: LoreComponent },
  { path: 'patch', component: PatchNoteComponent },
  { path: 'champions', component: ChampionsComponent, children:[
    { path: 'champion/:name/:id', component: ChampionDetailComponent },
    { path: '', component: ChampionsListComponent, pathMatch: 'full' }
  ] },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
