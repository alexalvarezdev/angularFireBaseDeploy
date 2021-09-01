import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interface';
import { HOUSES } from './houses.db';


@Injectable({
  providedIn: 'root'
})
export class HousesService {

  arrHouses: House[] = [];

  constructor() {
    this.arrHouses = HOUSES;
  }

  getAll() {
    return this.arrHouses;
  }
}
