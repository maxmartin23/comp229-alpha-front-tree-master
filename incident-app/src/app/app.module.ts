import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IncidentListComponent } from './incidents/incident-list/incident-list.component';
import { IncidentFormComponent } from './incidents/incident-form/incident-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './admin/auth/auth.component';
import { AuthService } from './model/auth.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { IncidentRepository } from './model/incident.repository';
import { RestDataSource } from './model/rest.datasource';

export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token') || "";
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IncidentListComponent,
    IncidentFormComponent,
    HomeComponent,
    LoginComponent,
    UserFormComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [AuthService,JwtHelperService,IncidentRepository, RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
