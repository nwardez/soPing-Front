import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../adherent.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Adherent } from '../modeles';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-adherent-edit',
  templateUrl: './adherent-edit.component.html',
  styleUrls: ['./adherent-edit.component.css']
})
export class AdherentEditComponent implements OnInit {

 

  adherent=new Adherent();
  formGroup: FormGroup;
  id:string;

  constructor(private adherentService: AdherentService,private router: Router, private route:ActivatedRoute, public fb: FormBuilder) { }

  //initialisation du formGroup pour validation des données
  ngOnInit() {
    this.formGroup=this.fb.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      //dateNaissance:['',Validators.compose([Validators.required,Validators.pattern("^([0-9]{2})/([0-9]{2})/([0-9]{4})$")])],
      dateNaissance:['',Validators.compose([Validators.required,Validators.pattern("^([0-3]{1})+([0-9]{1})/([0-1]{1})+([0-9]{1})/([0-9]{4})$")])],
      adresse:['',Validators.required],
      noLicence:[''],
      codePostal:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{5,5}$")])],
      commune:['',Validators.required],
      telDom:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{10,10}$")])],
      telPor:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{10,10}$")])],
      mail:['',Validators.compose([Validators.required,Validators.pattern("^([_a-zA-Z0-9-]+(\\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{1,6}))?$")])]
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      const adherentId = parseInt(this.id, 10);
  
      
      this.adherentService
        .afficherAdherent(adherentId)
        .subscribe(
           adherent => (this.adherent = adherent),
        );
      });
  }

  onSubmit() {
    console.log("on submit ok")
    this.adherentService.editerAdherent(this.adherent).subscribe(() => this.router.navigate(['/president/listeAdherent']));
   
  }

}
