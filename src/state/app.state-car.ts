import { FormGroup } from '@angular/forms';

export interface StateCar {
    nom: string;
    marque: string;
    immatriculation: string;
    datedachat: string;
    couleur: string;
    etat: string;
    delete: boolean;
    id: number;
}