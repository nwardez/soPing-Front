import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adherent-evenement',
  templateUrl: './adherent-evenement.component.html',
  styleUrls: ['./adherent-evenement.component.css']
})
export class AdherentEvenementComponent implements OnInit {
evenements=[
  {
    "date":"11/06/2018",
    "type":"Entrainement",
    "Lieu":"Saint Cristophe des Bardes",
    "couleur":"rgb(33, 92, 33)"
  },
  {
    "date":"18/06/2018",
    "type":"Entrainement",
    "Lieu":"Saint Laurent des Combes",
    "couleur":"rgb(33, 92, 33)"
  },
  {
    "date":"21/06/2018",
    "type":"Compétition",
    "Lieu":"Mérignac",
    "couleur":"rgb(173, 41, 41)"
  },
  {
    "date":"23/06/2018",
    "type":"Entrainement",
    "Lieu":"Saint Laurent des Combes",
    "couleur":"rgb(33, 92, 33)"
  },
  {
    "date":"25/06/2018",
    "type":"Réunion",
    "Lieu":"Saint-Emilion",
    "couleur":"grey"
  },

]

  constructor() { }

  ngOnInit() {
  }

}
