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
import { CurrencyPipe } from './currencyPipe';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RoutingModule } from './routing.module';
import { MatNativeDateModule } from '@angular/material';
import { TresorierComponent } from './tresorier/tresorier.component';
import { AdherentComponent } from './adherent/adherent.component';
import { PresidentEvenementComponent } from './president-evenement/president-evenement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeAdhesionsComponent } from './liste-adhesions/liste-adhesions.component';
import { SaisonsComponent } from './saisons/saisons.component';
import { FicheAdherentComponent } from './fiche-adherent/fiche-adherent.component';
import { AdherentEvenementComponent } from './adherent-evenement/adherent-evenement.component';
import { PopupComponent } from './popup/popup.component';
import { ListeSaisonComponent } from './liste-saison/liste-saison.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CreationSaisonComponent } from './creation-saison/creation-saison.component';
import { SaisonService } from './saison.service';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { CategorieService } from './categorie.service';
import { CreationCategorieComponent } from './creation-categorie/creation-categorie.component';
import { ListeLicencesComponent } from './liste-licences/liste-licences.component';
import { TypeLicenceService } from './type-licence.service';
import { CreationTypeLicenceComponent } from './creation-type-licence/creation-type-licence.component';
import { CreationPaiementComponent } from './creation-paiement/creation-paiement.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { CreationAdhesionComponent } from './creation-adhesion/creation-adhesion.component';
import { AdherentEditComponent } from './adherent-edit/adherent-edit.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccueilComponent,
    ListeAdherentsComponent,
    CreationAdherentComponent,
    DetailAdherentComponent,
    MesPipes,
    CurrencyPipe,
    HeaderComponent,
    ConnexionComponent,
    TresorierComponent,
    AdherentComponent,
    PresidentEvenementComponent,
    ListeAdhesionsComponent,
    SaisonsComponent,
    FicheAdherentComponent,
    AdherentEvenementComponent,
    PopupComponent,
    ListeSaisonComponent,
    UnderConstructionComponent,
    CreationSaisonComponent,
    ListeCategoriesComponent,
    CreationCategorieComponent,
    ListeLicencesComponent,
    CreationTypeLicenceComponent,
    CreationPaiementComponent,
    MonComposantComponent,
    CreationAdhesionComponent,
    AdherentEditComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatModule
  ],
  providers: [
    HttpClient,
    AdherentService,
    ApiService,
    PopupComponent,
    SaisonService,
    CategorieService,
    TypeLicenceService
  ],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
