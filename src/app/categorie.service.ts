import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './modeles';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategorieService {

  constructor(private api: ApiService, private http: HttpClient) { }

  private categorieSelectionne: Categorie;
  private id;

  creerCategorie(categorie: Categorie):Observable<Categorie> {
    console.log("service OK");
    return this.api.creerCategorie(categorie);
  }

  listerCategorie():Observable<Categorie[]> {
    return this.api.listerCategorie();
  }

  afficherCategorie(id: number): Observable<Categorie> {
    return this.api.afficherCategorie(id);
  }

  supprimerCategorie(id: number): Observable<Categorie> {
    return this.api.supprimerCategorie(id);
  }

  editerCategorie() {
    return this.api.editerCategorie(this.categorieSelectionne, this.id);
  }
  
}
