import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Incident } from "./incident.model";
import {User} from "./user.model";
import { JwtHelperService } from '@auth0/angular-jwt';


const PROTOCOL = 'http';
const PORT = '3000';

@Injectable({ providedIn: 'root' })
export class RestDataSource
{
    user: User | null = null;
    baseUrl : string;
    authToken: string | null = null;

    private httpOptions =
    {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
    };
    
    constructor(private httpClient: HttpClient,private jwtService: JwtHelperService)
    {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    }

    authenticate(user: User): Observable<any>
    {
        const userBackendURL = 'http://localhost:3000/api/users';
        return this.httpClient.post<string>(userBackendURL+"/authenticate", user, this.httpOptions);
    //   return this.httpClient.post<any>(this.baseUrl + 'login', user, this.httpOptions);
    }
    
    getIncidents() : Observable<Incident[]>
    {
        return this.httpClient.get<Incident[]>(this.baseUrl + 'incidents');
    }

    storeUserData(token: any, user: User): void
  {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any>
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.httpClient.get<any>(this.baseUrl + '/users/logout', this.httpOptions);
  }

  loggedIn(): boolean
  {
      if(this.authToken) {
        const userBackendURL = 'http://localhost:3000/api/users';
        const response = this.httpClient.post<string>(userBackendURL+"/verify", {authToken:this.authToken}, this.httpOptions);
        console.log(response)
        // const pk = "6e843f3a5c16fa508d63cc4cb73a921be7f4edfaae7ab56162449b7049d0bbd2cc18e46330ce22260fe1719cfb705a1b9703c1f4ec6fbdc89125ce57f0747fd4"
        // const jw= jwt.verify(this.authToken,pk)
        // console.log(jw)
        return true
        //   return !this.jwtService.isTokenExpired(this.authToken)
      }
    return false;
  }

}