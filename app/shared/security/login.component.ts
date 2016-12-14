import { Component, OnInit } from '@angular/core';
 import { AuthService } from "./auth.service"

// Avoid name not found warnings
declare var Auth0Lock: any;

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',    
    providers: [ AuthService ]
})

export class LoginComponent implements OnInit {  
 constructor(private authService: AuthService){  
 }
    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    isAuthenticated() {
        this.authService.isAuthenticated();
    }

    ngOnInit() { }
}