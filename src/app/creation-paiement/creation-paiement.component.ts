import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AdherentService } from '../adherent.service';
import { Adherent, Saison, Paiement } from '../modeles';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SaisonService } from '../saison.service';

@Component({
  selector: 'app-creation-paiement',
  templateUrl: './creation-paiement.component.html',
  styleUrls: ['./creation-paiement.component.css']
})
export class CreationPaiementComponent implements OnInit {

  adherents: Adherent[];
  saisons: Saison[];
  paiement=new Paiement();
  formGroup: FormGroup;

  constructor(private saisonService: SaisonService,private adherentService: AdherentService,private router: Router, private route:ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit() {
    this.adherentService.listerAdherent().subscribe((data:Adherent[])=>{
      this.adherents=data;
    });
    this.saisonService.listerSaison().subscribe((data: Saison[])=>{
      this.saisons=data;
    });
    this.formGroup=this.fb.group({
      choixAdherent:['', Validators.required],
      choixSaison:['', Validators.required],
      montant:['',Validators.required],
      date:['',Validators.required]
    });
  }

  onSubmit() {

  }

}
