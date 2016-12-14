import { Component, OnInit } from '@angular/core';
 import { AuthService } from "../security/auth.service"

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.component.html',    
    providers: [ AuthService ]
})
export class NavigationComponent implements OnInit {
    constructor(private authService: AuthService) { }

    logout() {
        this.authService.logout();
    }

    ngOnInit() { }

}