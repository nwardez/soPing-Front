import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adherent, Saison, Categorie } from './modeles';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private url="http://localhost:8080/";

  //adherent: Adherent;
  //selectedAdherent: Adherent;

  constructor(private http: HttpClient) { }

  // -----------------API ADHERENT-----------------------------------------------------
  // Création d'un nouvel adhérent
  creerAdherent(adherent: Adherent):Observable<Adherent> {
    console.log("Api ok");
    return this.http.post<Adherent>(this.url+'adherent',adherent);
  }

  //Retourne la liste des adherents
  listerAdherent():Observable<Adherent[]> {
    console.log(this.url);
    return this.http.get<Adherent[]>(this.url+'adherents') as Observable<Adherent[]>;
  }

  //Afficher le détail d'un adherent selon son Id
  afficherAdherent(idAdherent: number):Observable<Adherent> {
    return this.http.get<Adherent>(this.url+'adherent/' + idAdherent);
  }

  //Supprime un adherent en fonction de son Id
  supprimerAdherent(idAdherent: number): Observable<Adherent> {
    return this.http.delete<Adherent>(this.url+'/adherent/delete/'+ idAdherent);
  }

  editerAdherent(adherent: Adherent, id: number): Observable<Adherent> {
    return this.http.put<Adherent>(this.url + 'adherent/'+ adherent.id, adherent);
  }


  // -----------------API SAISON-----------------------------------------------------
  // Création d'une nouvelle saison
  creerSaison(saison: Saison):Observable<Saison> {
    console.log("Api ok");
    return this.http.post<Saison>(this.url+'saison',saison);
  }

  //Retourne la liste des saisons
  listerSaison():Observable<Saison[]> {
    console.log(this.url);
    return this.http.get<Saison[]>(this.url+'saisons') as Observable<Saison[]>;
  }

  //Afficher le détail d'une saison selon son Id
  afficherSaison(idSaison: number):Observable<Saison> {
    return this.http.get<Saison>(this.url+'saison/' + idSaison);
  }

  //Supprime une saison en fonction de son Id
  supprimerSaison(idSaison: number): Observable<Saison> {
    return this.http.delete<Saison>(this.url+'/saison/delete/'+ idSaison);
  }

  editerSaison(saison: Saison, id: number): Observable<Saison> {
    return this.http.put<Saison>(this.url + 'saison/'+ saison.id, saison);
  }

  // -----------------API CATEGORIE-----------------------------------------------------
  // Création d'une nouvelle catégorie
  creerCategorie(categorie: Categorie):Observable<Categorie> {
    console.log("Api ok");
    return this.http.post<Categorie>(this.url+'categorie',categorie);
  }

  //Retourne la liste des catégories
  listerCategorie():Observable<Categorie[]> {
    console.log(this.url);
    return this.http.get<Categorie[]>(this.url+'categories') as Observable<Categorie[]>;
  }

  //Afficher le détail d'une catégorie selon son Id
  afficherCategorie(idCategorie: number):Observable<Categorie> {
    return this.http.get<Categorie>(this.url+'categorie/' + idCategorie);
  }

  //Supprime une catégorie en fonction de son Id
  supprimerCategorie(idCategorie: number): Observable<Categorie> {
    return this.http.delete<Categorie>(this.url+'/categorie/delete/'+ idCategorie);
  }

  editerCategorie(categorie: Categorie, id: number): Observable<Categorie> {
    return this.http.put<Categorie>(this.url + 'categorie/'+ categorie.id, categorie);
  }

}
