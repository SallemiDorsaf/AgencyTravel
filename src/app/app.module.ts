import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotelsComponent } from './hotels/hotels.component';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { HotelsAComponent } from './hotels-a/hotels-a.component';
import { ProfilComponent } from './profil/profil.component';
import { OffresComponent } from './offres/offres.component';

const routes:Routes=[
  {path:'hotels' ,  component:HotelsComponent},
  {path:'hotels-a' ,  component:HotelsAComponent},

  {path:'main' ,  component:MainComponent},
  {path:'flights' ,  component:FlightsComponent },
  {path:'profil' ,  component:ProfilComponent },




]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HotelsComponent,
    FlightsComponent,
    HotelsAComponent,
    ProfilComponent,
    OffresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
