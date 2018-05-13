import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({name:'premiereLettreEnCapitale'})
export class MesPipes implements PipeTransform {
    transform(valeur:any) {
        if (valeur) {
            return valeur.charAt(0).toUpperCase() + valeur.slice(1);
        }
        return valeur;
    }
}