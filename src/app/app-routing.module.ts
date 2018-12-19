import { NgModule } from '@angular/core';
// routes
import { Routes, RouterModule } from '@angular/router';
// components
import {HomeComponent} from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'teatres', loadChildren: './components/teatre/teatre.module#TeatreModule' },
  { path: 'admin',   loadChildren: './components/table/table.module#TableModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
