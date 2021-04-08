import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  constructor(private incidentRepository : IncidentRepository) {
  }

  get incidents() : Incident[]
  {
    return this.incidentRepository.getIncidents();
  }

  ngOnInit(): void {}

}
