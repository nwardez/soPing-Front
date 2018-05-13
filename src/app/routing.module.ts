import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AccueilComponent} from './accueil/accueil.component';
import { PresidentComponent } from './president/president.component';
import { TresorierComponent } from './tresorier/tresorier.component';
import { AdherentComponent } from './adherent/adherent.component';

// Définition des chemins d'accès pour <router-outlet>
const ROUTES: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/accueil'
    },
    {
        path:'accueil',
        component: AccueilComponent
    },
    {
        path:'president',
        component: PresidentComponent
    },
    {
        path:'tresorier',
        component: TresorierComponent
    },
    {
        path:'adherent',
        component: AdherentComponent
    }

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