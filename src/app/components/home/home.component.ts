import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrHouse: House[] = [];
  constructor(
    private housesService: HousesService
  ) { }

  ngOnInit(): void {
    this.arrHouse = this.housesService.getAll();
  }

}
