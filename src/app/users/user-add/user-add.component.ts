import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { UserService } from '../user.service';
import { Role } from 'src/app/shared/models/role.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  roleList: Role[];
  roleListNames: string[];

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    addresses: new FormArray([
      new FormGroup({
        city: new FormControl(''),
        country: new FormControl(''),
        streetName: new FormControl(''),
        postalCode: new FormControl(''),
        type: new FormControl('')
      })
    ]),
    roles: new FormArray([]),
  });

  get addresses() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  get roles() {
    return (this.form.get('roles') as FormArray).controls;
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getRolesByPageAndLimit().subscribe(roles => {
      this.roleList = roles;
    });
  }

  onSubmit() {
    this.userService.createUser(this.form.value).subscribe()
  }

  onCancel() {
    this.router.navigateByUrl('/users')
  }

  changeType($event: Event) {
    this.form.get('addresses')?.get('type')?.setValue($event);
  }

  changeRole($event: Event) {
    const roleName = ($event.target as HTMLSelectElement).value
    const role = this.roleList.find(role => {
      return role.name === roleName;
    });
    const roleForm = new FormGroup({
      name: new FormControl(role?.name),
      authorities: new FormArray([])
    });
    const authorities = roleForm.get('authorities') as FormArray;
    role?.authorities.forEach(authority => {
      authorities.push(new FormGroup({
        name: new FormControl(authority.name)
      }));
    });
    
    if((this.form.get('roles') as FormArray).length === 0) {
      (this.form.get('roles') as FormArray).push(roleForm);
    } else {
      (this.form.get('roles') as FormArray).removeAt(0);
      (this.form.get('roles') as FormArray).push(roleForm);
    }
  }
}
