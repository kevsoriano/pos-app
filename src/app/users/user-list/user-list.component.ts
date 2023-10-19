import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchForm: FormGroup;
  currentPage = 0;
  totalPages = 10;
  userList: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(users => {
    //   console.log(users);
    //   this.userList = users;
    // });
    this.loadData({page: this.currentPage, limit: 10});
    this.searchForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });
  }

  onSubmit() {

  }

  onPageChanged(data: {page:number, limit: number}) {
    this.loadData(data);
    // console.log('onPageChanged', data);
  }

  onPageSizeChanged(data: {page:number, limit: number}) {
    this.loadData(data);
    // console.log('onPageSizeChanged', data);
  }

  loadData(data: {page:number, limit: number}) {
    this.userService.getUsersByPageAndLimit(data.page, data.limit).subscribe(response => {
      this.userList = response;
      this.totalPages = Math.ceil(response.length/data.limit);
      console.log(this.totalPages)
    });
  }

  addUser() {

  }
}
