import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { Role } from '../shared/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users_endpoint = 'http://localhost:8082/users';
  roles_endpoint = 'http://localhost:8082/roles';
  constructor(private http: HttpClient) { }

  getUsersByPageAndLimit(page: number, limit: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('limit', limit);
    return this.http.get<User[]>(this.users_endpoint, {
      params: queryParams 
    })
  }

  createUser(userDetails: User) {
    return this.http.post(this.users_endpoint, userDetails);
  }

  updateUser(userId: number, userDetails: User) {
    return this.http.put('${this.users_endpoint}/${userId}', userDetails);
  }

  deleteUser(userId: string) {
    return this.http.delete(this.users_endpoint + "/" + userId);
  }

  getRolesByPageAndLimit() {
    return this.http.get<Role[]>(this.roles_endpoint);
  }
}
