import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient) { }

  login(data) {
    return this.http
      .post(`${environment.api}/login`, data);
  }

  register(data) {
    return this.http
      .post(`${environment.api}/register`, data);
  }

  user() {
    return this.http
      .get(`${environment.api}/user`);
  }

  logout() {
    return this.http
      .post(`${environment.api}/logout`, {});
  }

  updateInfo(data) {
    return this.http
      .put(`${environment.api}/users/info`, data);
  }

  updatePassword(data) {
    return this.http
      .put(`${environment.api}/users/password`, data);
  }
}
