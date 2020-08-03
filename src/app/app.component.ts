import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // title = 'angular-projet-test';
  public ID: number;
  public cars = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.generateMyPersonnalId();
    this.store.pipe(select('appState')).subscribe(data => {
      this.cars = data.filter((car) => car.delete !== true && car.id > 0);
      console.log(data);
    })

  }

  generateMyPersonnalId() {
    const CREATEID = new Promise((resolve) => {
      resolve(this.generateId());
    });
    CREATEID.then((idGenerated) => {
      this.storeID(idGenerated);
      console.log(idGenerated);

    });
  }

  generateId() {
    return Math.floor(Math.random() * 100);;
  }

  storeID(id) {
    this.ID = id;
    localStorage.setItem('mon id', id);
  }




}

