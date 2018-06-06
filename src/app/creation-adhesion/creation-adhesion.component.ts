import { Component, OnInit } from '@angular/core';
import { SaisonService } from '../saison.service';
import { AdherentService } from '../adherent.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Adherent, Saison, Categorie, TypeLicence } from '../modeles';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CategorieService } from '../categorie.service';
import { TypeLicenceService} from '../type-licence.service';

@Component({
  selector: 'app-creation-adhesion',
  templateUrl: './creation-adhesion.component.html',
  styleUrls: ['./creation-adhesion.component.css']
})
export class CreationAdhesionComponent implements OnInit {

  adherents: Adherent[];
  saisons: Saison[];
  categories: Categorie[];
  typeLicences: TypeLicence[];
  formGroup: FormGroup;
  saison:Saison;
  categorie:Categorie;
  typeLicence:TypeLicence;

  constructor(private categorieService: CategorieService, 
              private saisonService: SaisonService,
              private adherentService: AdherentService,
              private typeLicenceService: TypeLicenceService,
              private router: Router, 
              private route:ActivatedRoute, 
              public fb: FormBuilder) { }

  ngOnInit() {
    this.adherentService.listerAdherent().subscribe((data:Adherent[])=>{
      this.adherents=data;
    });
    this.saisonService.listerSaison().subscribe((data: Saison[])=>{
      this.saisons=data;
    });
    this.categorieService.listerCategorie().subscribe((data:Categorie[])=>{
      this.categories=data;
    });
    this.typeLicenceService.listerTypeLicence().subscribe((data:TypeLicence[])=>{
      this.typeLicences=data;
    });
    this.formGroup=this.fb.group({
      choixAdherent:['', Validators.required],
      choixSaison:['', Validators.required],
      choixCategorie:['',Validators.required],
      choixLicence:['',Validators.required]
    });
  }

  onSubmit() {
    
    alert(this.calculMontantAdhesion());
  }

  calculMontantAdhesion():number {
    if (this.typeLicence.libelle == "Loisir") {
      console.log("loisir")
      return this.saison.cotisationClub;
    } else {
      console.log("compétition")
      console.log("lbelle attendu: " + this.categorie.libelle)
      let montantLicence: number;
      switch (this.categorie.libelle) {
        case "Poussin": {
          montantLicence = this.saison.montantLicencePoussin;
          break;
        }
        case "Benjamin": {
          montantLicence = this.saison.montantLicenceBenjamin;
          break;
        }
        case "Cadet": {
          montantLicence = this.saison.montantLicenceCadet;
          break;
        }
        case "Junior": {
          montantLicence = this.saison.montantLicenceJunior;
          break;
        }
        case "Sénior": {
          montantLicence = this.saison.montantLicenceSenior;
          break;
        }
        
        
      } 
      return this.saison.cotisationClub + montantLicence;
        
    }

  }

}
