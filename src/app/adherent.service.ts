import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Adherent } from './modeles';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdherentService {

  private adherentSelectionne: Adherent;
  private id;

  constructor(private api: ApiService, private http: HttpClient) { }


  creerAdherent(adherent: Adherent):Observable<Adherent> {
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

  editerAdherent() {
    return this.api.editerAdherent(this.adherentSelectionne, this.id);
  }
}
