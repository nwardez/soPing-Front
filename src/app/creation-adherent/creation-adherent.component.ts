import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../adherent.service';
import { Adherent } from '../modeles';
import { NgForm, FormsModule, FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-creation-adherent',
  templateUrl: './creation-adherent.component.html',
  styleUrls: ['./creation-adherent.component.css']
})
export class CreationAdherentComponent implements OnInit {

  adherent=new Adherent();
  formGroup: FormGroup;

  constructor(private adherentService: AdherentService,private router: Router, private route:ActivatedRoute, public fb: FormBuilder) { }

  //initialisation du formGroup pour validation des données
  ngOnInit() {
    this.formGroup=this.fb.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      dateNaissance:['',Validators.required],
      adresse:['',Validators.required],
      codePostal:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{5,5}$")])],
      commune:['',Validators.required],
      telDom:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{10,10}$")])],
      telPor:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{10,10}$")])],
      mail:['',Validators.compose([Validators.required,Validators.pattern("^([_a-zA-Z0-9-]+(\\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{1,6}))?$")])]
    });
  }

  onSubmit() {
    console.log("on submit ok")
    this.adherentService.creerAdherent(this.adherent).subscribe(() => this.router.navigate(['/president/listeAdherent']));
   
  }

}
