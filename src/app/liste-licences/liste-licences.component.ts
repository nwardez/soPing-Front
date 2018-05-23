import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { TypeLicenceService } from '../type-licence.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-liste-licences',
  templateUrl: './liste-licences.component.html',
  styleUrls: ['./liste-licences.component.css']
})
export class ListeLicencesComponent implements OnInit {

  colonnesTypeLicences=['libelle','commentaire','editer','supprimer'];
  dataTypeLicences;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private typeLicenceService: TypeLicenceService,private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog,public popup: PopupComponent) { }

  ngOnInit() {
    this.typeLicenceService.listerTypeLicence().subscribe(
      cases => {
        this.dataTypeLicences = new MatTableDataSource(cases);
        this.dataTypeLicences.paginator=this.paginator;
        this.dataTypeLicences.sort=this.sort;
      }
    );
  }

  update() {
    
      }
    
      delete(id:number) {
        this.typeLicenceService.supprimerTypeLicence(id).subscribe(
          ()=>{
            this.ngOnInit();
            this.router.navigate(['/president/listeTypeLicences'], {relativeTo: this.route});
          });
      }
    
      filtrerTableau(valeur: string) {
        valeur= valeur.trim();
        valeur=valeur.toLowerCase();
        this.dataTypeLicences.filter=valeur;
    }

}
