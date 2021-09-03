import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from 'src/app/interfaces/house.interface';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  houseUpdate: any = {};
  constructor(
    private housesService: HousesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.idhouse) {
        //Puedo preguntar por los datos de la casa por id
        const response = this.housesService.getById(params.idhouse);
        response.subscribe(data => {
          this.houseUpdate = data;
        })
      }
    })
  }

  async onSubmit(pForm: any) {
    const casa = pForm.value;
    casa.disponibilidad = true;
    let message: any;
    if (this.houseUpdate.id) {
      message = await this.housesService.create(casa, this.houseUpdate.id);
    } else {
      message = await this.housesService.create(casa);
    }

    console.log(message);
    if (message.success) {
      this.router.navigate(["/home"]);
    }

  }

}
