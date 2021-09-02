import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrHouse: Observable<any[]> = new Observable();
  constructor(
    private housesService: HousesService
  ) { }

  ngOnInit() {
    this.arrHouse = this.housesService.getAll();
    //console.log(this.arrHouse)
  }

}
