import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffresComponent } from './offres/offres.component';

const routes: Routes = [
  {path:'offre',component:OffresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
