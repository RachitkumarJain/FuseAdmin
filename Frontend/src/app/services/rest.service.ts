import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpoint(): string;

  constructor(
    protected http: HttpClient
  ) { }

  all(page?: number) {
    let url = this.endpoint;

    if(page) {
      url += `?page=${page}`;
    }
    return this.http.get(url);
  }

  getSingle(id: number) {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  create(data) {
    return this.http.post(this.endpoint, data);
  }

  update(id: number, data) {
    return this.http.put(`${this.endpoint}/${id}`, data);
  }

  delete(id: number)  {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
