import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from 'src/app/interfaces/house.interface';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  myHouse: House | undefined;
  constructor(
    private activateRoute: ActivatedRoute,
    private housesService: HousesService
  ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params => {
      const id = Number(params.idhouse)
      this.myHouse = this.housesService.getById(id);
      console.log(this.myHouse);
    })


  }

}
