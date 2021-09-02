import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  constructor(
    private housesService: HousesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(pForm: any) {
    const casa = pForm.value;
    casa.disponibilidad = true;

    const message = this.housesService.create(casa);
    if (message === 'success') {
      this.router.navigate(['/home']);
    }
  }

}
