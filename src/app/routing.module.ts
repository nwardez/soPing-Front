import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AccueilComponent} from './accueil/accueil.component';
import { TresorierComponent } from './tresorier/tresorier.component';
import { AdherentComponent } from './adherent/adherent.component';
import { ListeAdherentsComponent } from './liste-adherents/liste-adherents.component';
import { CreationAdherentComponent } from './creation-adherent/creation-adherent.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

// Définition des chemins d'accès pour <router-outlet>
const ROUTES: Routes = [
    {path:'',pathMatch:'full',redirectTo:'/accueil'},
    {path:'accueil',component: AccueilComponent,},
    {path:'president',
    children: [
        {path: 'listeAdherent', component: ListeAdherentsComponent}, 
        {path: 'creationAdherent', component: CreationAdherentComponent}, 
      ]
    },
    {path:'tresorier',component: TresorierComponent},
    {path:'adherent',component: AdherentComponent},
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