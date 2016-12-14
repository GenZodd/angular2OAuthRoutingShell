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
import { AdminComponent } from "./admin/admin.component"
import { UserAdminComponent } from "./admin/user-admin.component"

// services
import { AuthGuard } from "./shared/security/auth-guard.service"
import { AuthService } from "./shared/security/auth.service"

// routing
import { AdminRoutingModule } from "./admin/admin-routing.module"

export const routeConfig: Routes = [
    {
        path: '',
        component: NavigationComponent,
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
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routeConfig), AdminRoutingModule ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent, NavigationComponent, AdminComponent, UserAdminComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AUTH_PROVIDERS, AuthGuard, AuthService ]
})
export class AppModule { }
