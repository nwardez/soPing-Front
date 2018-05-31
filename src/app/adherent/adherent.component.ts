import { Component, OnInit, ViewChild } from '@angular/core';
import { Iadherent } from '../Iadherent';
import { ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css']
})
export class AdherentComponent implements OnInit {

  @ViewChild('content') content:ElementRef
  public generatePDF() {

    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };

    let content= this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15, {
      'width':190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('facture.pdf');

  }

  adherent=new Iadherent();
  

  constructor() { }

  ngOnInit() {
    this.adherent.nom="collet";
    this.adherent.prenom= "Yann";
    this.adherent.cotisations=80;
    // this.adherent = [
    //   {
    //     "nom":"Abacab",
    //     "prenom":"Genesis",
    //     "dateNaissance":1981,
    //     "adresse":"Rock",
    //     "codePostal":33500,
    //     "Commune": "Libourne",
    //     "telDom": "0524246148",
    //     "telPort":"0660249858",
    //     "mail": "yann.collet@gmail.com",
    //     "adhesion": [
    //         {
    //         "libelle": "2016/2017",
    //         "montantcotis": 35,
    //         "montantLicence": 45,
    //         "montantPaiement": 80,
    //         "regle": true
    //         },
    //         {
    //         "libelle": "2017/2018",
    //         "montantcotis1": 40,
    //         "montantLicence1": 55,
    //         "montantPaiement": 70,
    //         "regle": false
    //           }
    //         ],
    //     "evennement": [
    //         {
    //         "libelle":"entrainement",
    //         "date":"26/06/2018",
    //         "lieu": "Libourne"
    //         },
    //         {
    //         "libelle":"compétition",
    //         "date":"29/06/2018",
    //         "lieu": "Cestas"
    //         }
    //     ],
    //     "resultat": [
    //       {
    //       "libelle":"victoire",
    //       "set1":"08",
    //       "set2": "11",
    //       "set3": "11",
    //       "set4":"11",
    //       "set5": "04",
    //       "set6": "09",
    //       },
    //       {
    //         "libelle":"defaite",
    //         "set1":"1O",
    //         "set2": "11",
    //         "set3": "02",
    //         "set4":"12",
    //         "set5": "08",
    //         "set6": "11",
    //       }
    //   ]
    // }
    // ];
  }

}
