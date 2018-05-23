import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { TypeLicence } from './modeles';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TypeLicenceService {

  constructor(private api: ApiService, private http: HttpClient) { }

  private typeLicenceSelectionne: TypeLicence;
  private id;

  creerTypeLicence(typeLicence: TypeLicence):Observable<TypeLicence> {
    console.log("service OK");
    return this.api.creerTypeLicence(typeLicence);
  }

  listerTypeLicence():Observable<TypeLicence[]> {
    return this.api.listerTypeLicence();
  }

  afficherTypeLicence(id: number): Observable<TypeLicence> {
    return this.api.afficherTypeLicence(id);
  }

  supprimerTypeLicence(id: number): Observable<TypeLicence> {
    return this.api.supprimerTypeLicence(id);
  }

  editerTypeLicence() {
    return this.api.editerTypeLicence(this.typeLicenceSelectionne, this.id);
  }

}
