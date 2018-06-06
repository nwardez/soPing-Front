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
      'width':1000,
      'elementHandlers': specialElementHandlers
    });

    doc.save('facture.pdf');

  }

  adherent=new Iadherent();
  

  constructor() { }

  ngOnInit() {
    this.adherent.nom="COLLET";
    this.adherent.prenom= "Yann";
    this.adherent.cotisations="80,00 Euros";
    this.adherent.adresse= "147 bis rue des vignes";
    this.adherent.codepostal= "33500";
    this.adherent.ville="Libourne";
    this.adherent.TelDom="0524246148";
    this.adherent.TelPor="0654345644";
    this.adherent.mail="mon-mail.gmail.com";
    this.adherent.evenement1="Entrainement";
    this.adherent.lieuEvenement1="Libourne";
    this.adherent.dateEvenement1="07/06/2018";
    this.adherent.evenement2="Compétition";
    this.adherent.lieuEvenement2="Cestas";
    this.adherent.dateEvenement2="12/06/2018";
    this.adherent.evenement3="Entrainement";
    this.adherent.lieuEvenement3="Libourne";
    this.adherent.dateEvenement3="18/06/2018";
    
  }

}
