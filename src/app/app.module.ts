import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// routing
import { AppRoutingModule } from './app-routing.module';
// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// modal
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupComponent } from './components/signup/signup.component';
import { ModalComponent } from './components/modals/modal.component';
import { LoginComponent } from './components/modals/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ModalComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
