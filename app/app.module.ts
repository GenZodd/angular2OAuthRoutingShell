import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from "@angular/router";

import { AUTH_PROVIDERS } from 'angular2-jwt';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './customers/in-memory-data.service';

import { AppComponent }  from './app.component';
import { LoginComponent } from "./shared/security/login.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { AuthGuard } from "./shared/security/auth-guard.service"
 import { AuthService } from "./shared/security/auth.service"

export const routeConfig: Routes = [
    {
        path: '',
        component: DashboardComponent,        
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routeConfig) ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AUTH_PROVIDERS, AuthGuard, AuthService ]
})
export class AppModule { }
