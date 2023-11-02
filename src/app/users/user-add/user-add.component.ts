import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  form: FormGroup;
  // form = this.fb.group({
  //   firstName: [''],
  //   lastName: [''],
  //   email: ['', {
  //     validators: [Validators.required, Validators.email],
  //     updateOn: 'blur'
  //   }],
  //   password: ['', [Validators.required, Validators.minLength(8)]],
  //   addresses: null,
  //   roles: this.fb.array([])
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      addresses: new FormControl(
        new FormArray([
          new FormGroup({
            city: new FormControl(''),
            country: new FormControl(''),
            streetName: new FormControl(''),
            postalCode: new FormControl(''),
            type: new FormControl('')
          })
        ])
      ),
      roles: new FormArray([])
    })
    console.log(this.form.value)
  }

  get addresses() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  get roles() {
    return (this.form.get('roles') as FormArray).controls;
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  // onAddAddress() {
  //   const group = new FormGroup({
  //     city: new FormControl(''),
  //     country: new FormControl(''),
  //     streetName: new FormControl(''),
  //     postalCode: new FormControl(''),
  //     type: new FormControl('')
  //   }, Validators.required);
  //   (<FormArray>this.form.get('addresses')).push(group);
  // }

  onAddRole() {
    const group = new FormGroup({
      name: new FormControl(''),
      authorities: new FormArray([])
    });
    (<FormArray>this.form.get('roles')).push(group);
  }
}
