import { Injectable } from "@angular/core";
import { Incident } from './incident.model';

@Injectable()
export class IncidentRepository
{
    private incidents : Incident[] = [];
    private incidentDataSource : any;    
}
