import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interface';
import { HOUSES } from './houses.db';


@Injectable({
  providedIn: 'root'
})
export class HousesService {

  arrHouses: House[] = [];
  id: number = 5;

  constructor() {
    this.arrHouses = HOUSES;
  }

  getAll(): House[] {
    return this.arrHouses;
  }

  getById(pId: number): House | undefined {
    return this.arrHouses.find(house => house.id === pId);
  }

  create(pHouse: House): string {
    pHouse.id = this.id;
    this.arrHouses.push(pHouse);
    this.id++;
    console.log(this.arrHouses);
    return 'success';
  }
}
