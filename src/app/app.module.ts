import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { NewHouseComponent } from './components/new-house/new-house.component';
import { CardHouseComponent } from './components/card-house/card-house.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';


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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
