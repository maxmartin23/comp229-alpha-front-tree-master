import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';


@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  public incidents : Incident[] = [];
  constructor(private incidentRepository : IncidentRepository) {}

  ngOnInit(): void {
    this.incidents = this.incidentRepository.getIncidents();
    console.log(this.incidents);
  }

}
