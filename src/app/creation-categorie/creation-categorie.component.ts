import { Component, OnInit } from '@angular/core';
import { Categorie } from '../modeles';
import { FormGroup } from '@angular/forms';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-categorie',
  templateUrl: './creation-categorie.component.html',
  styleUrls: ['./creation-categorie.component.css']
})
export class CreationCategorieComponent implements OnInit {

  categorie=new Categorie();
  formGroup: FormGroup;

  constructor(private categorieService: CategorieService,private router: Router, private route:ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup=this.fb.group({
      libelle:['', Validators.required],
      commentaire:['', Validators.required]
    });
  }
  onSubmit() {
  this.categorieService.creerCategorie(this.categorie).subscribe(() => this.router.navigate(['/president/listeCategories']));
  }
}
