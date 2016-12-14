import { AuthGuard } from '../shared/security/auth-guard.service';
import { UserAdminComponent } from "./user-admin.component";
import { AdminComponent } from "./admin.component";
import {RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const adminRoutes: Routes = [
  {
    path: 'admin',
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