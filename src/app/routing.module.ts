import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AccueilComponent} from './accueil/accueil.component';
import { TresorierComponent } from './tresorier/tresorier.component';
import { AdherentComponent } from './adherent/adherent.component';
import { ListeAdherentsComponent } from './liste-adherents/liste-adherents.component';
import { CreationAdherentComponent } from './creation-adherent/creation-adherent.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CreationSaisonComponent } from './creation-saison/creation-saison.component';
import { ListeSaisonComponent } from './liste-saison/liste-saison.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { CreationCategorieComponent } from './creation-categorie/creation-categorie.component';
import { ListeLicencesComponent } from './liste-licences/liste-licences.component';
import { CreationTypeLicenceComponent } from './creation-type-licence/creation-type-licence.component';
import { CreationPaiementComponent } from './creation-paiement/creation-paiement.component';
import { CreationAdhesionComponent } from './creation-adhesion/creation-adhesion.component';
import { AdherentEditComponent } from './adherent-edit/adherent-edit.component';

// Définition des chemins d'accès pour <router-outlet>
const ROUTES: Routes = [
    {path:'',pathMatch:'full',redirectTo:'/accueil'},
    {path:'accueil',component: AccueilComponent,},
    {path:'president',
    children: [
        {path: 'listeAdherent', component: ListeAdherentsComponent}, 
        {path: 'creationAdherent', component: CreationAdherentComponent}, 
        {path: 'listeCategories', component: ListeCategoriesComponent},
        {path: 'creationCategorie', component: CreationCategorieComponent},
        {path: 'listeLicences', component: ListeLicencesComponent},
        {path: 'creationTypeLicence', component: CreationTypeLicenceComponent}
        
      ]
    },
    {path:'tresorier',
    children:[
      {path: 'creationPaiement', component:CreationPaiementComponent},
      {path: 'creationAdhesion', component:CreationAdhesionComponent}
    ]
  },
    {path:'adherent',component: AdherentComponent},
    {path: 'adherent/:id', component: AdherentComponent},
    {path:'adherent/edit/:id', component: AdherentEditComponent},
    {path:'saison',
    children: [
      {path:'creationSaison', component: CreationSaisonComponent},
      {path:'listeSaisons', component: ListeSaisonComponent}
    ]
  },
    {path:'404',component: UnderConstructionComponent}

]; 

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation:'reload'})
  ],
  exports: [
      RouterModule
  ]
})
export class RoutingModule { }