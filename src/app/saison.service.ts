import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Saison } from './modeles';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SaisonService {

  constructor(private api: ApiService, private http: HttpClient) { }

  private saisonSelectionne: Saison;
  private id;

  creerSaison(saison: Saison):Observable<Saison> {
    console.log("service OK");
    return this.api.creerSaison(saison);
  }

  listerSaison():Observable<Saison[]> {
    return this.api.listerSaison();
  }

  afficherSaison(id: number): Observable<Saison> {
    return this.api.afficherSaison(id);
  }

  supprimerSaison(id: number): Observable<Saison> {
    return this.api.supprimerSaison(id);
  }

  editerSaison() {
    return this.api.editerSaison(this.saisonSelectionne, this.id);
  }
}
