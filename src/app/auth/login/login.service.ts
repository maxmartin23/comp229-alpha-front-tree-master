import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

   userBackendURL = 'http://localhost:3000/api/users';

    authenticateUser(username: string, password: string) {
        return this.http.post<string>(this.userBackendURL+"/authenticate", {"username": username , "password": password});
    }
}