import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {

  colonnesCategories=['libelle','commentaire','editer','supprimer'];
  dataCategories;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categorieService: CategorieService,private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog,public popup: PopupComponent) { }

  ngOnInit() {
    this.categorieService.listerCategorie().subscribe(
      cases => {
        this.dataCategories = new MatTableDataSource(cases);
        this.dataCategories.paginator=this.paginator;
        this.dataCategories.sort=this.sort;
      }
    );
  }

  update() {

  }

  delete(id:number) {
    this.categorieService.supprimerCategorie(id).subscribe(
      ()=>{
        this.ngOnInit();
        this.router.navigate(['/president/listeCategories'], {relativeTo: this.route});
      });
  }

  filtrerTableau(valeur: string) {
    valeur= valeur.trim();
    valeur=valeur.toLowerCase();
    this.dataCategories.filter=valeur;
}


}
