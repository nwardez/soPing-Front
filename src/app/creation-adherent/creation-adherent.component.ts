import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../adherent.service';
import { Adherent } from '../modeles';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-creation-adherent',
  templateUrl: './creation-adherent.component.html',
  styleUrls: ['./creation-adherent.component.css']
})
export class CreationAdherentComponent implements OnInit {

  adherent=new Adherent();

  constructor(private adherentService: AdherentService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm) {
    console.log("on submit ok")
    this.adherentService.creerAdherent(this.adherent).subscribe(() => this.router.navigate(['/president/listeAdherent']));
   
  }

}
