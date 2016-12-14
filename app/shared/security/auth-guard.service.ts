import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(this.authService.isAuthenticated()) {
      alert("authenticated");
      return true;
    } else {
      this.router.navigate(['login']);
      alert("NOT authenticated");
      return false;
    }
  }
}