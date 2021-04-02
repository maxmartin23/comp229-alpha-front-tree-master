import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class IncidentRepository {
  private incidents: Incident[] = [];

  constructor(private dataSource: RestDataSource) {}

  getIncidents(): Incident[] {
    this.dataSource.getIncidents().subscribe((data) => {
      this.incidents = data;
    });

    return this.incidents;
  }
}
