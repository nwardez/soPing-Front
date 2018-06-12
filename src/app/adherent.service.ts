import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Adherent } from './modeles';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class AdherentService {

  

  constructor(private api: ApiService, private http: HttpClient) { }

  private adherentSelectionne: Adherent;
  private id;
 
  

  creerAdherent(adherent: Adherent):Observable<Adherent> {
    console.log("service OK");
    return this.api.creerAdherent(adherent);
  }

  listerAdherent():Observable<Adherent[]> {
    return this.api.listerAdherent();
  }

  afficherAdherent(id: number): Observable<Adherent> {
    return this.api.afficherAdherent(id);
  }

  supprimerAdherent(id: number): Observable<Adherent> {
    return this.api.supprimerAdherent(id);
  }

  editerAdherent(adherent: Adherent) {
    return this.http.put<Adherent>('http://localhost:8080/adherent/' +
    adherent.id, adherent, httpOptions) as Observable<Adherent>;
  }
}
