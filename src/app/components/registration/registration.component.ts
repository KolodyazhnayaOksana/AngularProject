import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() {
  }

  registrationForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required && Validators.email),
    password: new FormControl('', Validators.required && Validators.min(6)),
    confirmPassword: new FormControl('', Validators.required, this.PasswordConfirming.bind(this))
  });
  onSubmit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {
  }
 PasswordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
    }
 }
}
