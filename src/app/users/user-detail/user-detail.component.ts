import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  roleList: Role[];
  
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    addresses: new FormArray([]),
    roles: new FormArray([]),
  });

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  get addresses() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  get roles() {
    return (this.form.get('roles') as FormArray).controls;
  }

  ngOnInit(): void {
    this.userService.getUser(this.route.snapshot.paramMap.get('userId') || '').subscribe(user => {
      this.handleResponse(user);
    });
    this.fetchRoles();
  }

  fetchRoles() {
    this.userService.getRolesByPageAndLimit().subscribe(roles => {
      this.roleList = roles;
    });
  }

  handleResponse(user: User) {
    this.form.patchValue(user);
    user.addresses.forEach((address) => {
      const addressForm = new FormGroup({
        city: new FormControl(address.city),
        country: new FormControl(address.country),
        streetName: new FormControl(address.streetName),
        postalCode: new FormControl(address.postalCode),
        type: new FormControl(address.type)
      })

      this.addresses.push(addressForm);
    })

    user.roles.forEach((role) => {
      const roleForm = new FormGroup({
        name: new FormControl(role.name),
        authorities: new FormArray([])
      })

      role.authorities.forEach((authority) => {
        const authorityForm = new FormGroup({
          name: new FormControl(authority.name)
        });

        (roleForm.get('authorities') as FormArray).controls.push(authorityForm);
      })

      this.roles.push(roleForm);
    })

  }

  changeRole($event: Event) {
    throw new Error('Method not implemented.');
  }

  changeType($event: Event) {
    throw new Error('Method not implemented.');
  }

  onCancel() {
    this.router.navigateByUrl('/users')
  }

  onSubmit() {
    console.log(this.form)
  }

}
