import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    //templateUrl: "D:\EP\Platform\Outsell.Dep\Outsell.Dep.Web.Client\app\app.component.htmls"
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }
}
