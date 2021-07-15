import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/public/home/home.component';
import {CalificacionesComponent} from './views/public/calificaciones/calificaciones.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'calificaciones', component: CalificacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
