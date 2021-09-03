import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {

  @Input() house: House | undefined;
  constructor(
    private housesService: HousesService
  ) { }

  ngOnInit(): void {
  }

  async onDelete(pId: string | undefined) {
    if (pId) {
      const response = await this.housesService.delete(pId);
      console.log(response);
      if (response.success) {
        alert('Casa borrada correctamente');
      }
    }
  }

}
