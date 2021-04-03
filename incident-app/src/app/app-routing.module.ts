import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { IncidentFormComponent } from './incidents/incident-form/incident-form.component';
import { IncidentListComponent } from './incidents/incident-list/incident-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'incidents/create', component : IncidentFormComponent},
  {path: 'incidents', component : IncidentListComponent},
  {path: 'users/register', component : UserFormComponent},
  {path: 'login', component : LoginComponent},
  {path: 'logout', component : HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
