import { NgModule } from '@angular/core';
// router
import { Routes, RouterModule } from '@angular/router';
// components
import { Table1Component} from './table1/table1.component';

const routes: Routes = [
  { path: 'table/:id', component: Table1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
