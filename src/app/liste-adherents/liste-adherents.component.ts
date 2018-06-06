import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdherentService } from '../adherent.service';
import { ApiService } from '../api.service';
import { MesPipes } from '../mesPipes';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-liste-adherents',
  templateUrl: './liste-adherents.component.html',
  styleUrls: ['./liste-adherents.component.css'],
})
export class ListeAdherentsComponent implements OnInit {

  colonnesAdherents=['id','nom','prenom','code postal','commune','portable','editer','supprimer'];
  dataAdherents;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adherentService: AdherentService,private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog,public popup: PopupComponent) { }



  ngOnInit() {
    this.adherentService.listerAdherent().subscribe(
      cases => {
        this.dataAdherents = new MatTableDataSource(cases);
        this.dataAdherents.paginator=this.paginator;
        this.dataAdherents.sort=this.sort;
      }
    );
  }

  delete (id:number) {
    this.adherentService.supprimerAdherent(id).subscribe(
      ()=>{
        this.ngOnInit();
        this.router.navigate(['/president/listeAdherent'], {relativeTo: this.route});
      });
  }

  update() {

  }

    filtrerTableau(valeur: string) {
      valeur= valeur.trim();
      valeur=valeur.toLowerCase();
      this.dataAdherents.filter=valeur;
  }

  



}
