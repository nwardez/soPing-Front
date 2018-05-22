import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Saison } from '../modeles';
import { FormGroup } from '@angular/forms';
import { SaisonService } from '../saison.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-saison',
  templateUrl: './creation-saison.component.html',
  styleUrls: ['./creation-saison.component.css']
})
export class CreationSaisonComponent implements OnInit {

  saison=new Saison();
  formGroup: FormGroup;

  constructor(private saisonService: SaisonService,private router: Router, private route:ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup=this.fb.group({
      libelle:['', Validators.required],
      cotisationClub:['', Validators.required],
      poussin:['',Validators.required],
      benjamin:['',Validators.required],
      cadet:[''],
      junior:['',Validators.required],
      senior:['',Validators.required]
    });
  }

  onSubmit() {
    this.saisonService.creerSaison(this.saison).subscribe(() => this.router.navigate(['/saison/listeSaisons']));
  }

}
