import { NgModule } from '@angular/core';

import { AdminComponent }   from './admin.component';
import { UserAdminComponent } from "./user-admin.component"
import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
    imports: [ AdminRoutingModule ],
    exports: [],
    declarations: [AdminComponent, UserAdminComponent]
})
export class AdminModule { }
