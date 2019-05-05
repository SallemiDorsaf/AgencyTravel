import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffresComponent } from './offres/offres.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReserveonliComponent } from './reserveonli/reserveonli.component';

const routes: Routes = [
  {path:'offre',component:OffresComponent},
  {path:'reserve',component:ReserveComponent},
  {path:'reserveonligne',component:ReserveonliComponent},
  {path:'',redirectTo:'/main',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
