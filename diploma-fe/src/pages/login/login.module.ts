import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app/app-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
})

export class LoginModule { }
