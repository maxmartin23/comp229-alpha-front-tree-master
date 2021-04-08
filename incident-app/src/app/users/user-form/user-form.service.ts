import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private http: HttpClient) { }

   userBackendURL = 'http://localhost:3000/api/users';

    registerUser(username: string, password: string,email: string, type: string) {
        // return this.http.post<string>(this.userBackendURL+"/register", {"username": username , "password": password, "email": email, "type": type});
        return this.http.post<string>(this.userBackendURL+"/create", {"username": username , "password": password, "email": email, "type": type});
    }
}
