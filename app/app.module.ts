import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from "@angular/router";

import { AUTH_PROVIDERS } from 'angular2-jwt';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './customers/in-memory-data.service';

// components
import { AppComponent }  from './app.component';
import { LoginComponent } from "./shared/security/login.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { NavigationComponent } from "./shared/navigation/navigation.component"

// services
import { AuthGuard } from "./shared/security/auth-guard.service"
import { AuthService } from "./shared/security/auth.service"

// modules
import { AdminModule } from "./admin/admin.module" // note everything in the app folder is loaded via this including the admin routes

export const routeConfig: Routes = [
    {
        path: '',
        component: NavigationComponent, //
        children: [
            {
                path: '',
                component: DashboardComponent,
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routeConfig), AdminModule ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, NavigationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AUTH_PROVIDERS, AuthGuard, AuthService ],
  exports: [ NavigationComponent ]
})
export class AppModule { }
