import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StateCar } from 'src/state/app.state-car';

@Component({
  selector: 'app-form-cars',
  templateUrl: './form-cars.component.html',
  styleUrls: ['./form-cars.component.css']
})
export class FormCarsComponent implements OnInit {

  // (nom, marque, immatriculation, date d’achat, couleur, état
  public formCars: FormGroup;
  public dataForChange: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  submit() {
    if (!this.formCars.valid) {
      return;
    }
    if (!this.dataForChange) {
      this.store.dispatch({ type: 'CREATE CAR', payload: this.formCars.value })
    } else {
      this.store.dispatch({ type: 'MODIFY CAR', payload: this.formCars.value })
      this.dataForChange = null;
    }
    this.formCars.reset();
    // TO DO Don't work
    // setTimeout(() => {
    //   this.formCars.markAsUntouched()
    // }, 2000);
  }

  carChange(event) {
    this.dataForChange = event;
    console.log(event);
    this.formCars.controls['nom'].setValue(event.nom);
    this.formCars.controls['marque'].setValue(event.marque)
    this.formCars.controls['immatriculation'].setValue(event.immatriculation)
    this.formCars.controls['datedachat'].setValue(event.datedachat)
    this.formCars.controls['couleur'].setValue(event.couleur)
    this.formCars.controls['etat'].setValue(event.etat)
    this.formCars.controls['delete'].setValue(event.delete)
    this.formCars.controls['id'].setValue(event.id)
  }

  ngOnInit(): void {
    this.formCars = this.formBuilder.group({
      nom: [null, Validators.required],
      marque: [null, Validators.required],
      immatriculation: [null, Validators.required],
      datedachat: [null, Validators.required],
      couleur: [null, Validators.required],
      etat: [null, Validators.required],
      delete: [false],
      id: [0],
    });
  }
}
