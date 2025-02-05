import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import { IndividualDashboardComponent } from './features/individual/individual-dashboard/individual-dashboard.component';
import { CollectorDashboardComponent } from './features/collector/collector-dashboard/collector-dashboard.component';
import { UnauthorizedComponent } from './features/auth/unauthorized/unauthorized.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { CollecteCardComponent } from './shared/collecte-card/collecte-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    IndividualDashboardComponent,
    CollectorDashboardComponent,
    UnauthorizedComponent,
    SideMenuComponent,
    CollecteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
