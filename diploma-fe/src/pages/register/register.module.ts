import {NgModule} from '@angular/core';
import {RegisterComponent} from './register.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app/app-routing.module';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepper,
    MatStep,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatStepLabel,
    MatButton,
    MatStepperNext,
    MatStepperPrevious
  ]
})

export class RegisterModule {}
