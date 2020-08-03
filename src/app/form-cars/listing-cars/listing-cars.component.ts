import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StateCar } from "../../../state/app.state-car";

export interface car {
  nom: string;
  marque: string;
  immatriculation: number;
  datedachat: string;
  couleur: string;
  etat: string;
  delete: boolean;
  id: number
}

@Component({
  selector: 'app-listing-cars',
  templateUrl: './listing-cars.component.html',
  styleUrls: ['./listing-cars.component.css']
})
export class ListingCarsComponent implements OnInit {

  @Output()
  change: EventEmitter<StateCar> = new EventEmitter<StateCar>();

  displayedColumns: string[] = ['nom', 'marque', 'immatriculation', 'datedachat', 'couleur', 'etat', 'actions'];
  dataSource = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select('appState')).subscribe(data => {
      this.dataSource = data.filter((car) => car.delete !== true && car.id > 0);
      console.log(data);
    })
  }

  modifyCar(car) {
    this.change.emit(car);
  }

  deleteCar(car) {
    this.store.dispatch({ type: 'DELETE CAR', payload: car.id })
  }




}
