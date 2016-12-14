import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    //templateUrl: "D:\EP\Platform\Outsell.Dep\Outsell.Dep.Web.Client\app\app.component.htmls"
    templateUrl: 'app.component.html'
})
export class AppComponent {
    name = 'Todd';
    title = 'Angular';
    h1Color = 'purple';

    clickIt() {
        this.h1Color = this.h1Color === "purple" ? "blue" : "purple";
    }
}
