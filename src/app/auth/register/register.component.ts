import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl(''),
      'addresses': new FormArray([
        new FormGroup({
          'city': new FormControl(''),
          'country': new FormControl(''),
          'streetName': new FormControl(''),
          'postalCode': new FormControl(''),
          'type': new FormControl('')
        })
      ]),
      'roles': new FormArray([
        new FormGroup({
          'name': new FormControl(''),
          'authorities': new FormArray([
            new FormGroup({
              'name': new FormControl('')
            })
          ])
        })
      ])
    });
  }

  get addresses() {
    return (this.registerForm.get('addresses') as FormArray).controls;
  }

  get roles() {
    return (this.registerForm.get('roles') as FormArray).controls;
  }

  getAuthorities(i:number) {
    return (this.registerForm.get(['roles',i,'authorities']) as FormArray).controls;
  }

  onAddAddress() {
    const group = new FormGroup({
      'city': new FormControl(''),
      'country': new FormControl(''),
      'streetName': new FormControl(''),
      'postalCode': new FormControl(''),
      'type': new FormControl('')
    })
    this.addresses.push(group);
  }

  onAddRole() {
    const group = new FormGroup({
      'name': new FormControl(''),
      'authorities': new FormArray([])
    })
    this.roles.push(group);
  }

  onAddAuthority(i:number) {
    const control = new FormControl('');
    this.getAuthorities(i).push(control);
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe();
    // console.log(this.registerForm.value);
  }

  onLoginBtnClicked() {
    this.router.navigateByUrl("/account/login");
  }
}
