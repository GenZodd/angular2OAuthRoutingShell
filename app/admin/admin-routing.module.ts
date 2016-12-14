import { AuthGuard } from '../shared/security/auth-guard.service';

import { UserAdminComponent } from "./user-admin.component";
import { AdminComponent } from "./admin.component";

import {RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

// navigation is setup here just to show another way of doing the navigation, plus the way this module is setup it will not let you use anything from app module (as far as I know)
import { NavigationComponent } from "../shared/navigation/navigation.component"

const adminRoutes: Routes = [
  {
    path: 'admin',    
    component: NavigationComponent,
        children: [
            {
                path: '',
                component: AdminComponent,
                canActivate: [AuthGuard],
                children: [
                  {
                    path: '',
                    children: [
                      { path: 'user', component: UserAdminComponent }
                    ],
                  }
                ]
            }
        ]
        
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}