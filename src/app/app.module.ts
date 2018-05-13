import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MatModule } from './mat.module';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ListeAdherentsComponent } from './liste-adherents/liste-adherents.component';
import { AdherentService } from './adherent.service';
import { ApiService } from './api.service';
import { CreationAdherentComponent } from './creation-adherent/creation-adherent.component';
import { DetailAdherentComponent } from './detail-adherent/detail-adherent.component';
import { MesPipes } from './mesPipes';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PresidentComponent } from './president/president.component';
import { RoutingModule } from './routing.module';
import { MatNativeDateModule } from '@angular/material';
import { TresorierComponent } from './tresorier/tresorier.component';
import { AdherentComponent } from './adherent/adherent.component';
import { PresidentEvenementComponent } from './president-evenement/president-evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccueilComponent,
    ListeAdherentsComponent,
    CreationAdherentComponent,
    DetailAdherentComponent,
    MesPipes,
    HeaderComponent,
    ConnexionComponent,
    PresidentComponent,
    TresorierComponent,
    AdherentComponent,
    PresidentEvenementComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule
  ],
  exports: [
    MatModule
  ],
  providers: [
    HttpClient,
    AdherentService,
    ApiService,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
