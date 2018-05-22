import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { ViewChild } from '@angular/core';
import { SaisonService } from '../saison.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { CurrencyPipe } from '../currencyPipe'

@Component({
  selector: 'app-liste-saison',
  templateUrl: './liste-saison.component.html',
  styleUrls: ['./liste-saison.component.css']
})
export class ListeSaisonComponent implements OnInit {

  colonnesAdherents=['libelle','cotisation','poussin','benjamin','cadet','junior','senior','editer'];
  dataSaisons;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private saisonService: SaisonService,private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog,public popup: PopupComponent) { }

  ngOnInit() {
    this.saisonService.listerSaison().subscribe(
      cases => {
        this.dataSaisons = new MatTableDataSource(cases);
        this.dataSaisons.paginator=this.paginator;
        this.dataSaisons.sort=this.sort;
      }
    );
  }

  update() {
    
      }
    
        filtrerTableau(valeur: string) {
          valeur= valeur.trim();
          valeur=valeur.toLowerCase();
          this.dataSaisons.filter=valeur;
      }

}
