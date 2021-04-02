import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IncidentListComponent } from './incidents/incident-list/incident-list.component';
import { IncidentFormComponent } from './incidents/incident-form/incident-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { IncidentRepository } from './model/incident.repository';
import { RestDataSource } from './model/rest.datasource';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IncidentListComponent,
    IncidentFormComponent,
    HomeComponent,
    LoginComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    IncidentRepository,
    RestDataSource,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
