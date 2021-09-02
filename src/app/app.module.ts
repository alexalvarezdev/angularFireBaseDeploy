import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { NewHouseComponent } from './components/new-house/new-house.component';
import { CardHouseComponent } from './components/card-house/card-house.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseDetailComponent,
    NewHouseComponent,
    CardHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
