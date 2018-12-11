import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing
import { TeatreRoutingModule } from './teatre-routing.module';
// components
import { TeatreComponent } from './teatre/teatre.component';
import { TeatreHomeComponent } from './teatre-home/teatre-home.component';
import { KinoHomeComponent } from './kino-home/kino-home.component';

@NgModule({
  declarations: [
    TeatreComponent,
    TeatreHomeComponent,
    KinoHomeComponent
  ],
  imports: [
    CommonModule,
    TeatreRoutingModule
  ]
})
export class TeatreModule { }
