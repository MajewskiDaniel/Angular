import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-registration',
  templateUrl: './react-registration.component.html',
  styleUrls: ['./react-registration.component.css']
})
export class ReactRegistrationComponent implements OnInit {
  myFormGroup = new FormGroup({
    firstName: new FormControl('Daniel', [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl('Majewski', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('monkey@monkey.com', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('666999666', [Validators.required, Validators.pattern(/[0-9]*/)]),
    sex: new FormControl('1', Validators.required)
  });

  constructor() { }

  ngOnInit() {
    this.myFormGroup.valueChanges.subscribe((value)=> console.log(value));

    this.myFormGroup.patchValue({
      firstName: 'Sebastian',
      email: 'seba@sebix.ue'
    })
  }
  register() {
    this.myFormGroup.get('firstName').setValue('Danielsan')
    console.log(this.myFormGroup.value);
  }
}
