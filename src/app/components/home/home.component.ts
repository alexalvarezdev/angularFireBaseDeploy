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
  latitud: number = 0;
  longitud: number = 0;
    constructor(
    private housesService: HousesService
  ) {

    navigator.geolocation.getCurrentPosition((position) => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    })




   }

  ngOnInit() {
    this.arrHouse = this.housesService.getAll();
    //console.log(this.arrHouse)
  }
  onRightClick($event: any) {
    alert('Tocando el boton derecho del raton')
    console.log($event)
  }

}
