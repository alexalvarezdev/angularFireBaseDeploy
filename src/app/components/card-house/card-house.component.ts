import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';

@Component({
  selector: 'app-card-house',
  templateUrl: './card-house.component.html',
  styleUrls: ['./card-house.component.css']
})
export class CardHouseComponent implements OnInit {

  @Input() house: House | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
