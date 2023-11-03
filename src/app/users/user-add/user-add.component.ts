import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { UserService } from '../user.service';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  roleList: Role[];

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
    roles: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        authorities: new FormArray([
          new FormGroup({
            name: new FormControl('')
          })
        ])
      })
    ]),
  });

  get addresses() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  get roles() {
    return (this.form.get('roles') as FormArray).controls;
  }

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getRolesByPageAndLimit().subscribe(roles => {
      this.roleList = roles;
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  changeType($event: Event) {
    this.form.get('addresses')?.get('type')?.setValue($event);
  }

  changeRole($event: Event) {
    throw new Error('Method not implemented.');
  }

  updateRoles($event: Event) {
    // TODO: Dynamically add form groups/controls as user selects roles from list of checkboxes
    throw new Error('Method not implemented.');
  }
}
