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

  users_endpoint = 'http://localhost:8082/users';
  user = new BehaviorSubject<string|null>(null);

  register(userData: User) {
    return this.http.post<User>(this.users_endpoint,
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
    return this.http.post('http://localhost:8082/login',
      {
        email: userData.email,
        password: userData.password
      }, {observe: 'response'}
    ).pipe(
      tap(resData => {
        this.handleAuth(resData.headers.get("token"), resData.headers.get("userId")
      )})
    );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }

  handleAuth(token: string | null, userId: string | null) {
    console.log(token, userId);
    localStorage.setItem('token', JSON.stringify(token));
    this.user.next(token);
  }

  autoLogin() {
    const token = JSON.parse(localStorage.getItem('token') as string);
    this.user.next(token);
  }
}
