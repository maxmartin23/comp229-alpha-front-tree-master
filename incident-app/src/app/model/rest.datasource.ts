import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Incident } from "./incident.model";

const PROTOCOL = 'http';
const PORT = '3000';

@Injectable()
export class RestDataSource
{
    baseURL : string;
    
    constructor(private httpClient: HttpClient)
    {
        this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    }
    
    getIncidents() : Observable<Incident[]>
    {
        return this.httpClient.get<Incident[]>(this.baseURL + 'incidents');
    }

}