import { NgModule } from '@angular/core';
// routes
import { Routes, RouterModule } from '@angular/router';
// components
import { TeatreComponent } from './teatre/teatre.component';
import { TeatreHomeComponent } from './teatre-home/teatre-home.component';
import { KinoHomeComponent } from './kino-home/kino-home.component';

const itemRoutes: Routes = [
];

const routes: Routes = [
  { path: '', component: TeatreComponent },
  { path: 'teatre/:id', component: TeatreHomeComponent },
  { path: 'teatre/kino/:id', component: KinoHomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeatreRoutingModule { }
