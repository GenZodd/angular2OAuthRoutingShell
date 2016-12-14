import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from "../shared/navigation/navigation.component"

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}