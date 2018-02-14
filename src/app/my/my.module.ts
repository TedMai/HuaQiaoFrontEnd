import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyRoutingModule} from './my-routing.module';
import {WidgetModule} from '../widget/widget.module';

import {AuthGuard} from '../service/auth-guard.service';

import {MyPatientsComponent} from './my-patients/my-patients.component';
import {MyMobileComponent} from './my-mobile/my-mobile.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {ListAppointmentComponent} from './list-appointment/list-appointment.component';

@NgModule({
    imports: [
        CommonModule,
        WidgetModule,
        MyRoutingModule
    ],
    declarations: [
        MyProfileComponent,
        MyMobileComponent,
        MyPatientsComponent,
        ListAppointmentComponent
    ],
    providers: [
        AuthGuard
    ]
})
export class MyModule {
}
