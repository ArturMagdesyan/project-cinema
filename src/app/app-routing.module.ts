import { NgModule } from '@angular/core';
// routes
import { Routes, RouterModule } from '@angular/router';
// components
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teatres', loadChildren: './components/teatre/teatre.module#TeatreModule'},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
