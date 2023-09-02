import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.userService.getUsers().subscribe(users => {
      console.log(users);
    });
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });
  }

  onSubmit() {

  }
}
