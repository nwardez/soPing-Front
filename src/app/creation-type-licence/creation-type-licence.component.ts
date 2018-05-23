import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { TypeLicence } from '../modeles';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TypeLicenceService } from '../type-licence.service';

@Component({
  selector: 'app-creation-type-licence',
  templateUrl: './creation-type-licence.component.html',
  styleUrls: ['./creation-type-licence.component.css']
})
export class CreationTypeLicenceComponent implements OnInit {

  typeLicence=new TypeLicence();
  formGroup: FormGroup;

  constructor(private typeLicenceService: TypeLicenceService,private router: Router, private route:ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup=this.fb.group({
      libelle:['', Validators.required],
      commentaire:['', Validators.required]
    });
  }

  onSubmit() {
    this.typeLicenceService.creerTypeLicence(this.typeLicence).subscribe(() => this.router.navigate(['/president/listeLicences']));
    }

}
