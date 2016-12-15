import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from "../shared/navigation/navigation.component"

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(public toastr: ToastsManager) {
      }

    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
      }
    
      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }
    
      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }
    
      showInfo() {
        this.toastr.info('Just some information for you.');
      }
      
      showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
      }
      
    ngOnInit() { }
}