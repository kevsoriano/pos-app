import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users_endpoint = 'http://localhost:8082/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.users_endpoint);
  }

  getUsersByPageAndLimit(page: number, limit: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('limit', limit);
    return this.http.get<User[]>(this.users_endpoint, {
      params: queryParams 
    })
  }
}
