import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PrimeNGConfig } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MessageService } from 'primeng/api';

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
import { UserComponent } from './pages/user/user.component';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { NewChampionComponent } from './pages/champions/new-champion/new-champion.component';
import { LoginComponent } from './pages/user/login/login.component';

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
    ChampionsListComponent,
    UserComponent,
    RegistrationComponent,
    NewChampionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    PaginatorModule,
    ToastModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
