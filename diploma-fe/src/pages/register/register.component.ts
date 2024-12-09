import {Component, inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  standalone: false,
  styleUrls: ['register.component.scss']
})

export class RegisterComponent {
  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required]
  })
  thirdFormGroup = this._formBuilder.group({
    cardNumber: ['', Validators.required],
    cvv: ['', Validators.required],
    endDate: ['', Validators.required],
    cardHolderName: ['', Validators.required]
  })
}
