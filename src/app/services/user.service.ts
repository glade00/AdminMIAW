import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  connect(data: Login) {
    return this.httpClient.post('http://localhost:3000/auth/login', data);
  }
}
