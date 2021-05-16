import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../interfaces/login-form';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(formData: LoginForm) {
    return this.http.post(`${this.baseUrl}login`, formData);
  }
  
}
