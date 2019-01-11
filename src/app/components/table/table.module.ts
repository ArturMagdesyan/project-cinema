import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing
import { TableRoutingModule } from './table-routing.module';
// components
import { Table1Component } from './table1/table1.component';
// ng2-smart-table
import { Ng2SmartTableModule } from 'ng2-smart-table';
// Form
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Table1Component],
  imports: [
    CommonModule,
    TableRoutingModule,
    Ng2SmartTableModule,
    FormsModule
  ]
})
export class TableModule { }
