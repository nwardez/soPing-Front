export class Adherent {
    public id?: number;
    nom: string;
    prenom: string;
    noLicence: string;
    dateDeNaissance: string;
    //categorie: string;
    adresse: string;
    codePostal: string;
    commune: string;
    telDomicile: string;
    telPortable: string;
    mail: string;
    //dateAdhesion: string;
}

export class Saison {
    public id?: number;
    libelle:string;
    cotisationClub:number;
    montantLicencePoussin: number;
    montantLicenceBenjamin: number;
    montantLicenceCadet: number;
    montantLicenceJunior: number;
    montantLicenceSenior: number;
}

export class Categorie {
    public id?: number;
    libelle:string;
    commentaire:string;

}

export class Paiement {
    public id?: number;

}

export class TypeLicence {
    public id?: number;
    libelle: string;
    commentaire: string;
}