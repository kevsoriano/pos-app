import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users_endpoint = 'http://localhost:8082/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.users_endpoint);
  }
}
