import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  auth_endpoint = 'http://localhost:8082/users';
  user = new BehaviorSubject<User|null>(null);

  register(userData: User) {
    return this.http.post<User>(this.auth_endpoint,
      {
        firstName: userData.firstName, 
        lastName: userData.lastName, 
        email: userData.email, 
        password: userData.password, 
        addresses: userData.addresses,
        roles: userData.roles
      }
      // {
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json'
      //   })
      // }
    );
  }

  login(userData: {email: string, password: string}) {
    return this.http.post(this.auth_endpoint,
      {
        email: userData.email,
        password: userData.password
      }
    );
  }

}
