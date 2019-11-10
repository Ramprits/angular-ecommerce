import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: any;

  constructor(private httpClient: HttpClient) {}
  getToken(): any {
    return this.token;
  }
  setToken(token) {
    this.token = token;
  }
  addUser(username: string, email: string, password: string): Observable<any> {
    this.httpClient.post<any>('http://localhost:1337/auth/local/register', {
      username,
      email,
      password
    });
  }
  async login(data: any) {
    const payload = { identifier: data.identifier, password: data.password };
    const response = await this.httpClient
      .post<{ jwt: any }>('http://localhost:1337/auth/local', payload)
      .toPromise();
    localStorage.setItem('token', response.jwt);
  }
}
