import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adherent } from './modeles';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private url="http://localhost:8080/";

  //adherent: Adherent;
  //selectedAdherent: Adherent;

  constructor(private http: HttpClient) { }

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

}
