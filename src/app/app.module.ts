import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImmagginiComponent } from './components/immaggini/immaggini.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { LoreComponent } from './pages/lore/lore.component';
import { PatchNoteComponent } from './pages/patch-note/patch-note.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { ErrorComponent } from './pages/error/error.component';
import { CardComponent } from './components/card/card.component';
import { ChampionDetailComponent } from './pages/champions/champion-detail/champion-detail.component';
import { ChampionsListComponent } from './pages/champions/champions-list/champions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImmagginiComponent,
    CarouselComponent,
    HomeComponent,
    LoreComponent,
    PatchNoteComponent,
    ChampionsComponent,
    ErrorComponent,
    CardComponent,
    ChampionDetailComponent,
    ChampionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
