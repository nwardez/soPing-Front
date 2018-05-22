import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Pipe({name:'euros'})
export class CurrencyPipe implements PipeTransform {
    transform(valeur:any,args) {
        let pipe=new DecimalPipe('');
        return pipe.transform(valeur,"3.2")+ "€";
        //var originalValue=valeur;
        //var stringValue = originalValue.toString();
        //var commaValue = stringValue.replace('.',',');
        //var finalValue = commaValue + "€";
        //return finalValue;
    }
}