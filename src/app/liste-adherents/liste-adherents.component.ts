import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdherentService } from '../adherent.service';
import { ApiService } from '../api.service';
import { MesPipes } from '../mesPipes';

@Component({
  selector: 'app-liste-adherents',
  templateUrl: './liste-adherents.component.html',
  styleUrls: ['./liste-adherents.component.css'],
})
export class ListeAdherentsComponent implements OnInit {

  colonnesAdherents=['noLicence','nom','prenom','code postal','commune','portable'];
  dataAdherents;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adherentService: AdherentService) { }



  ngOnInit() {
    this.adherentService.listerAdherent().subscribe(
      cases => {
        this.dataAdherents = new MatTableDataSource(cases);
        this.dataAdherents.paginator=this.paginator;
        this.dataAdherents.sort=this.sort;
      }
    );
  }

    filtrerTableau(valeur: string) {
      valeur= valeur.trim();
      valeur=valeur.toLowerCase();
      this.dataAdherents.filter=valeur;

  }



}
