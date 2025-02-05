import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {LoginComponent} from './features/auth/login/login.component';
import {RegisterComponent} from './features/auth/register/register.component';
import {IndividualDashboardComponent} from './features/individual/individual-dashboard/individual-dashboard.component';
import {CollectorDashboardComponent} from './features/collector/collector-dashboard/collector-dashboard.component';
import {UnauthorizedComponent} from './features/auth/unauthorized/unauthorized.component';
import {AuthGuard} from './core/authentication/auth.guard';
import {RoleGuard} from './core/roleGuards/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'individual', component: IndividualDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'individual' },
    children: [
      { path: '', component: IndividualDashboardComponent },
    ]
  },
  { path: 'collector', component: CollectorDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'collector' },
    children: [
      { path: '', component: CollectorDashboardComponent },
    ]
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
